import { ADD_PLACE, DELETE_PLACE} from './actionTypes';


export const addPlace = (placeName, location, image) => { 
    return  dispatch =>{
        const placeData = {
            name: placeName,
            location: location
        }
        fetch("https://awesome-places-215c1.firebaseio.com/places.json",{
            method: "POST",
            body: JSON.stringify(placeData)
        })
        .catch( err => console.log(err))  // VERY IMPORTANT: catch() will only catch failed network requests. It will NOT catch 4xx and 5xx error codes!
        .then(res => res.json())
        .then(parsedRes => {
            console.log(parsedRes);
        });
    }
}

export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        placeKey: key
    }
}
 