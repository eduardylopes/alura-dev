import { clearCode, addCodeCard } from "./domGenerator.js"
import { codeInfo, setCodeInfoList } from "./storage.js";

function init() {
    codeInfo.forEach((element, index) => {
        addCodeCard(element, index)
    });

    setCodeInfoList(codeInfo);
   
}

export function reload() {
    clearCode()

    init()
}

init()
