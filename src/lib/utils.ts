export function shortenAddress(address: string|undefined): string|undefined{
    if(address){
        return address.substring(0,4)+'...'+address.slice(-4)
    }else{
        return address
    }
}