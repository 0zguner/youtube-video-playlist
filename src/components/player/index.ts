import { html, customElement, css, property } from "lit-element";
import { MobxLitElement } from "@adobe/lit-mobx";
import PlayerStore from "../../store";

@customElement("video-player")
export class VideoPlayer extends MobxLitElement {
  private store = PlayerStore;
  constructor() {
    super();
    this.initYouTubeApi();
  }

  @property()
  videoId = { type: String };

  static get styles() {
    return css`
      :host {
        display: flex;
        flex: 2;
        flex-direction: column;
        height: 100vh;
        border: 1px solid gray;
      }
    `;
  }

  initYouTubeApi() {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";

    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode!.insertBefore(tag, firstScriptTag);

    //@ts-ignore
    window.onYouTubeIframeAPIReady = this.loadVideo.bind(this);
  }

  //@ts-ignore
  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
    //@ts-ignore
    window.player.loadVideoById(this.videoId);
  }

  loadVideo() {
    //@ts-ignore
    const element = this.shadowRoot.querySelector("#player");
    //@ts-ignore
    window.player = new window.YT.Player(element, {
      height: "100%",
      width: "100%",
      videoId: this.videoId,
      events: {
        onReady: this.onPlayerReady,
        onStateChange: this.onPlayerStateChange.bind(this)
      }
    });
  }

  onPlayerReady(event: any) {
    event.target.playVideo();
  }
  onPlayerStateChange(event: any) {
    // @ts-ignore
    if (event.data === window.YT.PlayerState.ENDED) {
      this.store.setNextSong();
    }
  }

  render() {
    return html`
      <div id="player"></div>
    `;
  }
}
