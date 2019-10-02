import { LitElement, html, customElement, css } from "lit-element";

@customElement("custom-button")
export class CustomButton extends LitElement {
  static get styles() {
    return css`
      button {
        background-color: #4caf50; /* Green */
        border: none;
        color: white;
        height: 50px;
        padding: 15px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 12px;
        cursor: pointer;
        opacity: 1;
        transition: all 0.3s ease 0s;
        width: 110px;
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
