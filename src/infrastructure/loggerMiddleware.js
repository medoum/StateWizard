import { state } from "../domain/state";

export function withLogger(){
    return (state) => {
        console.log("[Logger] New state", state)
    }
}