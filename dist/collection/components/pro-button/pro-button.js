import { Component, h, Prop } from "@stencil/core";
import generateClasses from "../../utils/generateClasses";
export class ProButton {
  constructor() {
    this.variant = "primary";
    this.size = "small";
    this.disabled = false;
  }
  classes() {
    return generateClasses(["pro-button", this.size, this.variant]);
  }
  render() {
    return (h("button", { class: this.classes(), disabled: !!this.disabled },
      h("slot", null)));
  }
  static get is() { return "pro-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["pro-button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["pro-button.css"]
  }; }
  static get properties() { return {
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ColorVariants",
        "resolved": "\"danger\" | \"info\" | \"neutral\" | \"outline-base\" | \"outline-danger\" | \"outline-info\" | \"outline-primary\" | \"outline-success\" | \"outline-warning\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
        "references": {
          "ColorVariants": {
            "location": "import",
            "path": "../../types/ColorVariants"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "\"primary\""
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"small\" | \"medium\" | \"large\"",
        "resolved": "\"large\" | \"medium\" | \"small\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "\"small\""
    },
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
