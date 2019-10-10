import { html, customElement, css, LitElement } from "lit-element";
import PlayerStore from "../../store";

@customElement("add-song")
export class AddSong extends LitElement {
  private store = PlayerStore;
  private artist = "";
  private songTitle = "";
  private url = "";

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 50px;
        background-color: black;
        border: 1px solid whitesmoke;
      }
    `;
  }

  render() {
    return html`
      <input
        placeholder="Artist"
        id="artist-name"
        @input="${this.onArtistChange}"
      />
      <input
        placeholder="Song Title"
        id="song-title"
        @input="${this.onTitleChange}"
      />
      <input
        placeholder="Youtube URL"
        id="song-youtube-url"
        @input="${this.onUrlChange}"
      />
      <custom-button @click="${this.save}">Save</custom-button>
    `;
  }

  private save() {
    this.store.addSongToCurrentPlaylist({
      id: "",
      title: this.songTitle,
      artist: this.artist,
      url: this.url,
      video_id: ""
    });
    this.store.addSongModalHidden = true;
  }

  private onArtistChange(event: any) {
    this.artist = event.target.value;
  }
  private onTitleChange(event: any) {
    this.songTitle = event.target.value;
  }
  private onUrlChange(event: any) {
    this.url = event.target.value;
  }
}
