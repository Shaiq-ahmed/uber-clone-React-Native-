import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    origin:null,
    destination:null,
    travelTimeInformation:null

}

export const navSlice = createSlice({
    name:"nav",
    initialState,
    reducer:{
        setOrigin:(state,action)=>{
            state.origin = action.payloadd;
        },
        setDestination:(state,action)=>{
            state.destination = action.payloadd;
        },
        setTravelTimeInformation:(state,action)=>{
            state.travelTimeInformation = action.payloadd;
        }
    }
}) 
export const { setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions

export const selectOrigin =(state)=>state.nav.origin
export const selectDestination =(state)=>state.nav.destination
export const selectTravelTimeInformation =(state)=>state.nav.travelTimeInformation


export default navSlice.reducer