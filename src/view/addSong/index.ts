import { LitElement, html, customElement, css } from "lit-element";

@customElement("add-song")
export class AddSong extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
      }
    `;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
