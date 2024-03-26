import { SAVE_LOCATION } from "./actionTypes";
export const saveLocation=(location)=>({
    type: SAVE_LOCATION,
    payload:location,
});