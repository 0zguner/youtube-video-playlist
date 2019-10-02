import { html, customElement, css, LitElement, property } from "lit-element";
import { SongModel } from "../../store";

@customElement("playlist-item")
export class PlaylistItem extends LitElement {
  @property()
  song = {} as SongModel;

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: row;
        cursor: pointer;
      }
    `;
  }

  render() {
    const { song } = this;
    return html`
      <p>${song.title} | ${song.artist}</p>
    `;
  }
}
