import { StructurePreviewProps } from "./piw-utils-internal";
import { inputTestPreviewProps } from "../typings/inputTestProps";
import { Properties, transformGroupsIntoTabs } from "@mendix/pluggable-widgets-tools";

export function getProperties(
    values: inputTestPreviewProps,
    defaultProperties: Properties,
    platform: "web" | "desktop"
): Properties {
    console.log(values);
    if (platform === "web") {
        transformGroupsIntoTabs(defaultProperties);
    }
    return defaultProperties;
}
export function getPreview(values: inputTestPreviewProps): StructurePreviewProps | null {
    console.log(values);
    return null;
}
