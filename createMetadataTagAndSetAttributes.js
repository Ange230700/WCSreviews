function createMetadataTag() {
    let metadataTag = document.createElement("meta");
    return metadataTag;
}

function setMetadataTagAttribute(metadataTag, attributeName, attributeValue) {
    metadataTag.setAttribute(attributeName, attributeValue);
}