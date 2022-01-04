export function getCodeInfoList() {
    return JSON.parse(localStorage.getItem('codeInfo')) || []
}

export function setCodeInfoList(codeInfo) {
    localStorage.setItem('codeInfo', JSON.stringify(codeInfo))
}

export let codeInfo = getCodeInfoList();