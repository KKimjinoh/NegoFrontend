import { SAVE_LOCATION } from "./actionTypes";

const initialState={
    lat:null,
    lng:null,
    address:'',
};

const locaitonReducer=(state=initialState,action)=>{
    switch(action.type){
        case SAVE_LOCATION:
            return{
                ...state,
                lat: action.payload.lat,
                lng: action.payload.lng,
                address:action.payload.address,
            };
            default:
                return state;
    }
}
export default locaitonReducer;