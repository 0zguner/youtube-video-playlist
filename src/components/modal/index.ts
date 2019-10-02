import { html, customElement, css, LitElement, property } from "lit-element";

@customElement("modal-container")
export class Modal extends LitElement {
  @property()
  visible = false;

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.4);
        justify-content: center;
        align-content: center;
      }
      :host([hidden]) {
        display: none !important;
      }
    `;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
