export const cleanHTML =(location)=>{
    while (location.firstChild) {
        location.removeChild(location.firstChild)
    }
}
