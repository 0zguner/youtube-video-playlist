import { html, customElement, css, LitElement } from "lit-element";
import PlayerStore from "../../store";

@customElement("add-song")
export class AddSong extends LitElement {
  private store = PlayerStore;
  private inputValue = "";

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
      <input placeholder="Artist" id="artist-name" @input="${this.onChange}" />
      <input
        placeholder="Song Title"
        id="song-title"
        @input="${this.onChange}"
      />
      <input
        placeholder="Youtube URL"
        id="song-youtube-url"
        @input="${this.onChange}"
      />
      <custom-button @click="${this.save}">Save</custom-button>
    `;
  }

  private save() {
    this.store.createPlaylist(this.inputValue);
    this.store.addSongModalHidden = true;
  }

  private onChange(event: any) {
    this.inputValue = event.target.value;
  }
}
