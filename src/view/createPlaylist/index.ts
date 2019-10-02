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
        height: 50px;
        background-color: black;
      }
      input {
        background-color: gray;
      }
    `;
  }

  render() {
    // const { createPlaylist } = this.store;
    return html`
      <input id="name" @input="${this.onChange}" />
      <custom-button @click="${this.save}">Save</custom-button>
    `;
  }

  private save() {
    this.store.createPlaylist(this.inputValue);
    this.store.modalHidden = true;
  }

  private onChange(event: any) {
    this.inputValue = event.target.value;
  }
}
