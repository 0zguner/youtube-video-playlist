import { html, customElement, css } from "lit-element";
import { MobxLitElement } from "@adobe/lit-mobx";
import PlayerStore from "../../store";

@customElement("playlist-select")
export class PlaylistSelect extends MobxLitElement {
  private store = PlayerStore;
  static get styles() {
    return css`
      :host {
        display: flex;
      }
      select {
        background-color: #4caf50; /* Green */
        border: none;
        border-radius: 0;
        color: white;
        padding: 15px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 12px;
        cursor: pointer;
        opacity: 1;
        transition: all 0.3s ease 0s;
        text-align-last: center;
      }
      select::-ms-expand {
        display: none;
      }

      @media screen and (min-width: 0\0) {
        select {
          background: none\9;
          padding: 5px\9;
        }
      }
    `;
  }

  render() {
    return html`
      <select @change="${this.handleChange}">
        ${this.store.playlists.map(
          playlist =>
            html`
              <option value="${playlist.id}">${playlist.name}</option>
            `
        )}
      </select>
      <slot></slot>
    `;
  }

  handleChange(event: any) {
    this.store.currentPlaylistId = event.target.value;
  }
}
