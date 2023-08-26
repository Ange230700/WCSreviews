let metadataForViewport = document.createElement("meta");
metadataForViewport.setAttribute("name", "viewport");
metadataForViewport.setAttribute("content", "width=device-width, initial-scale=1.0");

let cssStyleSheet = document.createElement("link");
cssStyleSheet.setAttribute("rel", "stylesheet");
cssStyleSheet.setAttribute("href", "/styles.css");
cssStyleSheet.setAttribute("type", "text/css");

let googleFontStyleSheetLinking = document.createElement("link");
googleFontStyleSheetLinking.setAttribute("rel", "stylesheet");
googleFontStyleSheetLinking.setAttribute("href", "https://fonts.googleapis.com/css?family=Ysabeau+Infant");