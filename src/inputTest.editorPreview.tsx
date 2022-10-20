import { parseStyle } from "./piw-utils-internal";
import { inputTestPreviewProps } from "../typings/inputTestProps";

declare function require(name: string): string;

export function preview(props: inputTestPreviewProps) {
    return <div style={parseStyle(props.style)}></div>;
}

export function getPreviewCss(): string {
    return require("./ui/index.scss");
}
