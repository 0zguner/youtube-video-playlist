import { html, customElement, css, LitElement } from "lit-element";
import PlayerStore from "../../store";

@customElement("create-playlist")
export class CreatePlaylist extends LitElement {
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
      <input
        placeholder="Playlist name"
        id="playlist-name"
        @input="${this.onChange}"
      />
      <custom-button @click="${this.save}">Save</custom-button>
    `;
  }

  private save() {
    this.store.createPlaylist(this.inputValue);
    this.store.createPlaylistModalHidden = true;
  }

  private onChange(event: any) {
    this.inputValue = event.target.value;
  }
}
