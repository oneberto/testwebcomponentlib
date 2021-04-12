'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-71713531.js');

function generateClasses(classes) {
  return classes.filter(Boolean).join(' ');
}

const proButtonCss = "*{margin:0;padding:0;box-sizing:border-box;font-smoothing:antialiased;font-family:Nunito, sans-serif}button{background:transparent;border:none;outline:none;cursor:pointer}:host{all:initial}.pro-button{border-radius:4px;font-family:Nunito;font-style:normal;font-weight:bold;font-size:16px;line-height:22px}.pro-button.small{height:32px;padding:0 16px}.pro-button.medium{height:40px;padding:0 24px}.pro-button.large{height:48px;padding:0 32px}.pro-button.primary{background:var(--pro-color-primary-500);color:var(--pro-color-white)}.pro-button.primary:hover{background:var(--pro-color-primary-700)}.pro-button.outline-primary{background:transparent;color:var(--pro-color-primary-500);border:1px solid var(--pro-color-primary-500)}.pro-button.outline-primary:hover{color:var(--pro-color-primary-600);background:var(--pro-color-primary-100);border:1px solid var(--pro-color-primary-600)}.pro-button.secondary{background:var(--pro-color-secondary-600);color:var(--pro-color-white)}.pro-button.secondary:hover{background:var(--pro-color-secondary-400)}.pro-button.outline-secondary{background:transparent;color:var(--pro-color-secondary-500);border:1px solid var(--pro-color-secondary-500)}.pro-button.outline-secondary:hover{color:var(--pro-color-secondary-600);background:var(--pro-color-secondary-100);border:1px solid var(--pro-color-secondary-600)}.pro-button.neutral{background:var(--pro-color-base-600);color:var(--pro-color-white)}.pro-button.neutral:hover{background:var(--pro-color-base-400)}.pro-button.outline-neutral{background:transparent;color:var(--pro-color-base-600);border:1px solid var(--pro-color-base-600)}.pro-button.outline-neutral:hover{background:var(--pro-color-base-100);color:var(--pro-color-base-500);border:1px solid var(--pro-color-base-500)}.pro-button.success{background:var(--pro-color-success-600);color:var(--pro-color-white)}.pro-button.success:hover{background:var(--pro-color-success-700)}.pro-button.outline-success{background:transparent;color:var(--pro-color-success-600);border:1px solid var(--pro-color-success-600)}.pro-button.outline-success:hover{background:var(--pro-color-success-100);color:var(--pro-color-success-700);border:1px solid var(--pro-color-success-700)}.pro-button.info{background:var(--pro-color-info-600);color:var(--pro-color-white)}.pro-button.info:hover{background:var(--pro-color-info-700)}.pro-button.outline-info{background:transparent;color:var(--pro-color-info-600);border:1px solid var(--pro-color-info-600)}.pro-button.outline-info:hover{background:var(--pro-color-info-100);color:var(--pro-color-info-700);border:1px solid var(--pro-color-info-700)}.pro-button.warning{background:var(--pro-color-warning-500);color:var(--pro-color-warning-900)}.pro-button.warning:hover{background:var(--pro-color-warning-600)}.pro-button.outline-warning{background:transparent;color:var(--pro-color-warning-800);border:1px solid var(--pro-color-warning-800)}.pro-button.outline-warning:hover{background:var(--pro-color-warning-100);color:var(--pro-color-warning-900);border:1px solid var(--pro-color-warning-900)}.pro-button.danger{background:var(--pro-color-danger-500);color:var(--pro-color-white)}.pro-button.danger:hover{background:var(--pro-color-danger-600)}.pro-button.outline-danger{background:transparent;color:var(--pro-color-danger-500);border:1px solid var(--pro-color-danger-500)}.pro-button.outline-danger:hover{background:var(--pro-color-danger-100);color:var(--pro-color-danger-600);border:1px solid var(--pro-color-danger-600)}.pro-button:disabled{background:var(--pro-color-base-200);color:var(--pro-color-base-400);cursor:not-allowed;border:0}.pro-button:disabled:hover{border:0;background:var(--pro-color-base-200);color:var(--pro-color-base-400)}";

const ProButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.variant = "primary";
    this.size = "small";
    this.disabled = false;
  }
  classes() {
    return generateClasses(["pro-button", this.size, this.variant]);
  }
  render() {
    return (index.h("button", { class: this.classes(), disabled: !!this.disabled }, index.h("slot", null)));
  }
};
ProButton.style = proButtonCss;

exports.pro_button = ProButton;
