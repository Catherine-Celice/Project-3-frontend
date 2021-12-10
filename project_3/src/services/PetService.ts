import Pet from "../models/pet";
import axios from "axios";

let token:string;
let expires: number;
let authUrl = "https://api.petfinder.com/v2/oauth2/token";
const baseUrl = "https://api.petfinder.com/v2/animals";

const getToken = () => {
  return empty(token) || new Date().getTime() >= expires
    ? axios
        .post(`${authUrl}`, {
          grant_type: "client_credentials",
          client_id: "hihSOZ24DJbcyTbjQwIABxjHBSX3TpUunzV3NidatCknCokd8t",
          client_secret: "B0mgsBNG8M50vpQ6bBF31xWGmQLnXyP4LTtB9Evf",
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

export function getAllPets(): Promise<Pet[]> {
  return getToken().then((token) => {
    return axios
      .get(`${baseUrl}`, {
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
    return getToken().then((token) => {
  return axios.get(`${baseUrl}/${petId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response.data.animal;
  });
  });
}
export function searchAvailablePets(
  type: string,
  age: string,
  gender: string,
  size: string,
  goodWithChildren: string,
  goodWithDogs: string,
  goodWithCats: string,
  location: string
): Promise<Pet[]> {
  // https://api.petfinder.com/v2/animals?type=dog&size=Medium&gender=Male
  let query = "";
  if (type) {
    query.concat(`?type=${type}`);
  }
  if (gender) {
    query.concat(`?gender=${gender}`);
  }
  if (age) {
    query.concat(`?age=${age}`);
  }
  if (size) {
    query.concat(`?size=${size}`);
  }
  if (goodWithChildren) {
    query.concat(`?good_with_children=${goodWithChildren}`);
  }
  if (goodWithDogs) {
    query.concat(`?good_with_dogs=${goodWithDogs}`);
  }
  if (goodWithCats) {
    query.concat(`?good_with_cats=${goodWithCats}`);
  }
  if (location) {
    query.concat(`?location=${location}`);
  }

  return axios.get(`${baseUrl}/${query}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response.data.animals;
  });
}

export const empty = (x: string) =>
  !Object.values(
    !isNaN(parseFloat(x))
      ? new Array(Math.ceil(Math.abs(Number(x)))).fill(1)
      : x || ""
  ).length;