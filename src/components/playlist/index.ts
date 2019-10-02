import { html, customElement, css } from "lit-element";
import { MobxLitElement } from "@adobe/lit-mobx";
import "../../components/button";
import "../../components/playlistItem";
import "../playlistSelect";
import PlayerStore from "../../store";

@customElement("play-list")
export class Playlist extends MobxLitElement {
  private store = PlayerStore;
  static get styles() {
    return css`
      :host {
        display: flex;
        flex: 1;
        flex-direction: column;
        height: 100vh;
        border: 1px solid gray;
      }
      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px;
      }
    `;
  }

  render() {
    return html`
      <div>
        <custom-button @click=${this.clickHandler}
          >Create Playlist</custom-button
        >
        <playlist-select></playlist-select>
        <custom-button @click=${this.clickHandler}>Add Song</custom-button>
      </div>
      ${this.store.currentPlaylist.songs.map(
        song =>
          html`
            <playlist-item
              @click="${() => this.store.setCurrentSong(song.id)}"
              .song=${song}
            ></playlist-item>
          `
      )}
    `;
  }
  private clickHandler() {
    this.store.modalHidden = !this.store.modalHidden;
  }
}
