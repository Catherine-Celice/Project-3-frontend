import Pet from "../models/pet";
import axios from "axios";
import Preferences from "../models/preferences";

let token:string;
let expires: number;
let authUrl = "https://api.petfinder.com/v2/oauth2/token";
const baseUrl = "https://api.petfinder.com/v2/animals";
const endParams = `&limit=75&distance=50&sort=distance`;
// https://api.petfinder.com/v2/animals/?limit=75&location=48219&?sort=distance
// https://api.petfinder.com/v2/animals/?location=48219&distance=50&sort=distance&good_with_children=true
// https://api.petfinder.com/v2/animals/?location=48219&distance=50&sort=distance&limit=75

const getToken = () => {
  return empty(token) || new Date().getTime() >= expires
    ? axios
        .post(`${authUrl}`, {
          grant_type: "client_credentials",
          client_id: "HzeuMtWMsk9qh8gIU9FsvskgawVJE7dLfTRIxOJjlA8YPpsmnx",
          client_secret: "FkmY4Byw5ARsHOwA5nnklQwy7M7cA0Fkrx1gCiOM",
        })
        .then((response) => {
          const data = response.data;
          token = data.access_token;
          expires = new Date().getTime() + data.expires_in * 1000;
          return token;
        })
        .catch((error) => {
          // this.error = error.stack.replace(/[\\n\n]/, "<br/>");
        })
    : new Promise((r) => r(token));
};

export function getAllPets(latitude:number, longitude:number): Promise<Pet[]> {
  console.log(latitude, longitude);
  console.log(`${baseUrl}/?location=${latitude},${longitude}${endParams}`);
  return getToken().then((token) => {
    return axios
      .get(`${baseUrl}/?location=${latitude},${longitude}${endParams}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response.data.animals;
      });
  });
}

export function getPetDetail(petId: string): Promise<Pet> {
  console.log(petId);
    return getToken().then((token) => {
  return axios.get(`${baseUrl}/${petId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    console.log(`${baseUrl}/${petId}`);
    return response.data.animal;
  });
  });
}

export function getPetFavorites(petList:string[]):Pet[] {
  let favPets:Pet[] = [];
  if(petList.length > 0){
      for(let i=0; i < petList.length; i++){
      getPetDetail(petList[i]).then((data) => {
          favPets.push(data);
        });
        }
    }
    console.log(favPets);
    return favPets;
}


export function searchAvailablePets(preferences:Preferences | undefined, location:string | undefined
  // type: string | undefined,
  // age: string | undefined,
  // gender: string | undefined,
  // size: string | undefined,
  // goodWithChildren: string | undefined,
  // goodWithDogs: string | undefined,
  // goodWithCats: string | undefined,
  // location: string | undefined
  // https://api.petfinder.com/v2/animals/?location=48219&distance=50&sort=distance&good_with_children=true
): Promise<Pet[]> {
  let query = "?";
  if (location) {
    console.log(location);
    query = query.concat(`location=${location}`);
  }
  if (preferences?.species) {
      query = query.concat(`&type=${preferences.species}`);
  }
  if (preferences?.gender) {
    query = query.concat(`&gender=${preferences.gender}`);
  }
  if (preferences?.age) {
    query = query.concat(`&age=${preferences.age}`);
  }
  if (preferences?.size) {
    query = query.concat(`&size=${preferences.size}`);
  }
  if (preferences?.kids) {
    query = query.concat(`&good_with_children=${preferences.kids}`);
  }
  if (preferences?.pet) {
    query = query.concat(`&good_with_dogs=${preferences?.pet}`);
    query = query.concat(`&good_with_cats=${preferences?.pet}`);
  }  
  return getToken().then((token) => {
    return axios.get(`${baseUrl}/${query}${endParams}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      return response.data.animals;
    });
    });
  }

  // export function getFavoritePets(petIds: string[]) {
  //   let petFavs:Promise<Pet>[] = [];
  //   for(let i = 0; i < petIds.length; i++){
  //   return getToken().then((token) => {
  //     return axios.get(`${baseUrl}/${petIds[i]}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }).then((response) => {
  //       console.log('Line 116 - ', response.data.animal)
  //       return response.data.animal;
  //     });
  //     }).then((response) => {
  //       console.log('Line 119 - ',response)
  //       petFavs.push(response);
  //     });
  //   }
  //   console.log('Line 124 --- ', petFavs.toString);
  //   return petFavs;
  //   }
 
export const empty = (x: string) =>
  !Object.values(
    !isNaN(parseFloat(x))
      ? new Array(Math.ceil(Math.abs(Number(x)))).fill(1)
      : x || ""
  ).length;