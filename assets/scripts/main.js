import { clearCode, addCodeCard } from "./domGenerator.js"
import { codeInfo, setCodeInfoList } from "./storage.js";
import { removeDOMCard } from "./domGenerator.js";
import { likeIconButton } from "./like.js";

function init() {
    codeInfo.forEach((element, index) => {
        addCodeCard(element, index)
    });

    setCodeInfoList(codeInfo);

    removeDOMCard();

    likeIconButton();

    hljs.highlightAll()
}

export function reload() {
    clearCode()

    init()
}

init()
