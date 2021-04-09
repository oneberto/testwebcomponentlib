import { r as registerInstance, h } from './index-7fc46e45.js';

function generateClasses(classes) {
  return classes.filter(Boolean).join(' ');
}

const proButtonCss = "*{margin:0;padding:0;box-sizing:border-box}button{background:transparent;border:none;outline:none;cursor:pointer}:host{all:initial}.custom-button{font-size:16px;line-height:22px;border-radius:4px}.custom-button.small{height:32px;padding:0 8px}.custom-button.medium{height:40px;padding:0 24px}.custom-button.large{height:48px;padding:0 32px}.custom-button.primary{background:var(--pro-color-primary-500);color:var(--pro-color-white)}.custom-button.primary:hover{background:var(--pro-color-primary-700)}.custom-button.secondary{background:var(--pro-color-secondary-600);color:var(--pro-color-white)}.custom-button.secondary:hover{background:var(--pro-color-secondary-400)}.custom-button.neutral{background:var(--pro-color-gray-600);color:var(--pro-color-white)}.custom-button.neutral:hover{background:var(--pro-color-gray-400)}.custom-button.success{background:var(--pro-color-success-600);color:var(--pro-color-white)}.custom-button.success:hover{background:var(--pro-color-success-700)}.custom-button.info{background:var(--pro-color-info-600);color:var(--pro-color-white)}.custom-button.info:hover{background:var(--pro-color-info-700)}.custom-button.warning{background:var(--pro-color-warning-500);color:var(--pro-color-warning-900)}.custom-button.warning:hover{background:var(--pro-color-warning-600)}.custom-button.danger{background:var(--pro-color-danger-500);color:var(--pro-color-white)}.custom-button.danger:hover{background:var(--pro-color-danger-600)}";

const ProButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = 'primary';
    this.size = 'small';
  }
  classes() {
    return generateClasses(['custom-button', this.size, this.variant]);
  }
  render() {
    return (h("button", { class: this.classes() }, h("slot", null)));
  }
};
ProButton.style = proButtonCss;

export { ProButton as pro_button };
