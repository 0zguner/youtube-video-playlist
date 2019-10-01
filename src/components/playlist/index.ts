import { html, customElement, css } from "lit-element";
import { MobxLitElement } from "@adobe/lit-mobx";
import "../../components/button";
import "../../components/playlistItem";
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
    `;
  }

  render() {
    return html`
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
}
