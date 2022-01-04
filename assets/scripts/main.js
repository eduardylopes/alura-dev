import { clearCode, addCodeCard } from "./domGenerator.js"
import { codeInfo, setCodeInfoList } from "./storage.js";
import { removeButton } from "./hover.js";

function init() {
    codeInfo.forEach((element, index) => {
        addCodeCard(element, index)
    });

    setCodeInfoList(codeInfo);

    removeButton();

    hljs.highlightAll()
}

export function reload() {
    clearCode()

    init()
}

init()
