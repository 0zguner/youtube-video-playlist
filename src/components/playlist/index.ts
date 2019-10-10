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
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
        border-right-color: whitesmoke;
        border-right-style: solid;
        border-right-width: 1px;
        padding-left: 20px;
      }
      .playlist {
        display: flex;
        flex: 1;
        flex-direction: column;
      }
      .controls {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 20px;
      }
    `;
  }

  render() {
    return html`
      <div class="playlist">
        ${this.store.currentPlaylist &&
          this.store.currentPlaylist.songs.map(
            song =>
              html`
                <playlist-item
                  @click="${() => this.store.setCurrentSong(song.id)}"
                  .song=${song}
                ></playlist-item>
              `
          )}
      </div>
      <div class="controls">
        <custom-button @click=${this.openCreatePlaylistModal}
          >Create Playlist</custom-button
        >
        <playlist-select></playlist-select>
        <custom-button @click=${this.openAddSongtModal}>Add Song</custom-button>
      </div>
    `;
  }
  private openCreatePlaylistModal() {
    this.store.createPlaylistModalHidden = !this.store
      .createPlaylistModalHidden;
  }
  private openAddSongtModal() {
    this.store.addSongModalHidden = !this.store.addSongModalHidden;
  }
}
