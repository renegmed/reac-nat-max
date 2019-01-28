import { DELETE_PLACE} from './actionTypes';
import { uiStartLoading, uiStopLoading } from './ui';
 
export const addPlace = (placeName, location, image) => { 
    return  async dispatch =>{
        let res = null;
        dispatch(uiStartLoading) 
        try {
            res = await fetch("https://us-central1-awesome-places-215c1.cloudfunctions.net/storeImage", {
                method: "POST",
                body: JSON.stringify({
                    image: image.base64
                })
            })
        } catch (err) { // VERY IMPORTANT: catch() will only catch failed network requests. It will NOT catch 4xx and 5xx error codes!
            console.log(err);
            dispatch(uiStopLoading());
            return;
        }

        let parsedRes = await res.json();
        
        try {
            const placeData = {
                name: placeName,
                location: location,
                image: parsedRes.imageUrl
            };
            res = await fetch("https://awesome-places-215c1.firebaseio.com/places.json", {
                method: "POST",
                body: JSON.stringify(placeData)
            })
        } catch (err) {
            console.log(err)
            dispatch(uiStopLoading());
            return;
        }

        // parsedRes = await res.json();
        console.log("+++actions.places: paredRes" + parsedRes);
        dispatch(uiStopLoading()); 
        
    }
}
// export const addPlace = (placeName, location, image) => { 
//     return  dispatch =>{
//         dispatch(uiStartLoading)
//         fetch("https://us-central1-awesome-places-215c1.cloudfunctions.net/storeImage", {
//             method: "POST",
//             body: JSON.stringify({
//                 image: image.base64
//             })
//         })
//         .catch( err => {
//             console.log(err);
//             dispatch(uiStopLoading());
//         })  // VERY IMPORTANT: catch() will only catch failed network requests. It will NOT catch 4xx and 5xx error codes!
//         .then(res => res.json())
//         .then(parsedRes => {
//             const placeData = {
//                 name: placeName,
//                 location: location,
//                 image: parsedRes.imageUrl
//             };
//             return fetch("https://awesome-places-215c1.firebaseio.com/places.json", {
//                 method: "POST",
//                 body: JSON.stringify(placeData)
//             })
//         })
//         .catch( err => { 
//             console.log(err)
//             dispatch(uiStopLoading());
//         })
//         .then(res => res.json())
//         .then(parsedRes => {
//             console.log(parsedRes);
//             dispatch(uiStopLoading());
//         }); 
//     }
// }

export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        placeKey: key
    }
}
 