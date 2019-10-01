import { LitElement, html, customElement, css } from "lit-element";

@customElement("custom-button")
export class CustomButton extends LitElement {
  static get styles() {
    return css`
      button {
        background-color: #4caf50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        cursor: pointer;
        opacity: 1;
        transition: all 0.3s ease 0s;
      }
      button:hover {
        opacity: 0.75;
      }
      button:active {
        filter: brightness(85%);
      }
    `;
  }

  render() {
    return html`
      <button><slot></slot></button>
    `;
  }
}
