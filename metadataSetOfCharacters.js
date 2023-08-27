createMetadataTag();
setMetadataTagAttribute(metadataTag, "charset", "UTF-8");

// MODULARIZATION
function includeFile(filePath, fileType = "text/javascript") {
    // INITIALIZATION
    let javascriptFile = document.createElement("script");
    javascriptFile.src = filePath;
    javascriptFile.type = fileType;

    // ACTION
    document.head.appendChild(javascriptFile);
}
includeFile("/createMetadataTagAndSetAttributes.js");