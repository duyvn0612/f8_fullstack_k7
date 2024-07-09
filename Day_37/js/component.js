export class F8 {
  static create(tag, callback) {
    class Component extends HTMLElement {
      connectedCallback() {
        // var _this = this;
        var shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.innerHTML = callback.call(this);
      }
    }
    customElements.define(tag, Component);
  }
}
