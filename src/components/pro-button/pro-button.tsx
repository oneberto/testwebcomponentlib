import { Component, h, Prop } from "@stencil/core";
import { ColorVariants } from "../../types/ColorVariants";
import _get from "lodash/get";
import generateClasses from "../../utils/generateClasses";

@Component({
    tag: "pro-button",
    styleUrl: "pro-button.scss",
    shadow: true,
})
export class ProButton {
    @Prop() variant: ColorVariants = "primary";
    @Prop() size: "small" | "medium" | "large" = "small";
    @Prop() disabled: boolean = false;

    private classes() {
        return generateClasses(["pro-button", this.size, this.variant]);
    }

    render() {
        return (
            <button class={this.classes()} disabled={!!this.disabled}>
                <slot></slot>
            </button>
        );
    }
}
