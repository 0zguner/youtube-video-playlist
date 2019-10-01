import { html, customElement, css } from "lit-element";
import { MobxLitElement } from "@adobe/lit-mobx";
import "../../components/button";
import "../../components/playlist";
import "../../components/player";
import PlayerStore from "../../store";

@customElement("home-view")
export class HomeView extends MobxLitElement {
  private store = PlayerStore;
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: row;
        flex: 3;
        height: 100vh;
        border: 1px solid gray;
      }
    `;
  }

  render() {
    return html`
      <play-list></play-list>
      <custom-button @click=${this.clickHandler}>Button</custom-button>
      <video-player videoId="${this.store.currentSong.video_id}"></video-player>
    `;
  }

  private clickHandler() {
    this.store.addSongToCurrentPlaylist({
      id: 10,
      title: "test1",
      artist: "test1",
      url: "test1",
      video_id: ""
    });
  }
}
