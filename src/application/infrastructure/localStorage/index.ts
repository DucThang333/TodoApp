export function saveLocalStorage({
    name,
    value
}:{name:string,value:string}){
    localStorage.setItem(name,value)
}

export function getLocalStorage(name:string){
    localStorage.getItem(name)
}

export function deleteLocalStorage(name:string){
    localStorage.removeItem(name)
}

export function clearLocalStorage(){
    localStorage.clear()
}