import { SET_PLACES, REMOVE_PLACE} from './actionTypes';
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
        console.log(parsedRes);

        dispatch(uiStopLoading()); 
        dispatch(getPlaces());
        
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

export const getPlaces = () => {
    return dispatch => {
        return fetch("https://awesome-places-215c1.firebaseio.com/places.json") 
         .catch(err => {
             alert("Something went wrong");
             console.log(err);
         })
        .then(res => res.json())
        .then(parsedRes => {
            const places = [];
            for (let key in parsedRes) {
                places.push({
                    ...parsedRes[key],
                    image: {
                        uri: parsedRes[key].image
                    },
                    key: key
                })
            }
            dispatch(setPlaces(places))
        }) 
    }
}

export const setPlaces = places => {
    return {
        type: SET_PLACES,
        places: places
    }
}

export const deletePlace = (place) => {
    return dispatch => {
        dispatch(removePlace(place.key));     // remove from state 'places' 

        // DOESN'T WORK. NEED TO RESEARCH
        // const imageUri = place.image.uri; 
        // console.log(imageUri);

        // let val = imageUri.split("/places%2F")
        // val = val[1].split("?")
     
        // fetch("https://us-central1-awesome-places-215c1.cloudfunctions.net/removeImage", {
        //     method: "DELETE",
        //     headers: {'Content-Type': 'image/jpeg'},
        //     body: JSON.stringify({id: val[0]})
        // })
        // .catch(err => {
        //     alert("Something went wrong during image removal");
        //     console.log(err);
        //     return;
        // })

        fetch("https://awesome-places-215c1.firebaseio.com/places/" + place.key + ".json", {
            method: "DELETE"
        }) 
        .catch(err => {
            alert("Something went wrong during delete place :/");
            console.log(err);
        })
        .then(res => res.json())
        .then(parsedRes => {
            console.log("Done! " + place.key + " was removed");
            console.log(place.image);
        });
    }  
}

export const removePlace = key => {
    return {
        type: REMOVE_PLACE,
        key: key
    }
}
 