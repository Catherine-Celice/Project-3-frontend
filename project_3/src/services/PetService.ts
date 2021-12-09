import Pet from '../models/pet'
import axios from "axios";


const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJoaWhTT1oyNERKYmN5VGJqUXdJQUJ4akhCU1gzVHBVdW56VjNOaWRhdENrbkNva2Q4dCIsImp0aSI6ImVhMmFmZjk4YTYwZTAwNGE3ZmUxY2JhMmE0NzJiMWUwOTIxZWFjYjBlZTBjYmVjM2NkYThiM2MyZTQzZDRjYjYwOTU4Y2E2NzFkZjQyNmVlIiwiaWF0IjoxNjM4OTM0MDQ2LCJuYmYiOjE2Mzg5MzQwNDYsImV4cCI6MTYzODkzNzY0Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.vR16LS2frIuIOQ6wq-DNc_fn-88c-S5XKEJnd9YCyAoKF6pKTAXxWHTvXo12Jqheyfi5qI47EqlnAxtfH2D0ra7u0snwKQrg5yjdL3-BLqite-8unKfynm9YX5SXLtbfpUJteVnscj96CUCSX7bCP9bMTvElsLiJIMJJWzHAnkRnTyCUqW6RgPtVlNIeveO1UTCrvz2RAlssFe_Ve-NPflBJfh1m7sGhucx_ZteEheHTyvbnDdODPxRaeNeCWqFRqh5CJda5WhjBMXUrXrkqVctAAea1KOgR8qxVJG3ITqXvBV_4WsmAJ9MHWrGGV5fIxRbebWeuUXt6KVXU5TotkA';
const baseUrl = 'https://api.petfinder.com/v2/animals';

 const config = {
    headers: { 
               'Authorization': `Bearer ${token}`
            }
    
};

export function getAllPets():Promise<Pet[]> {
    return axios.get(`${baseUrl}`,config).then((response) => {
    return response.data.animals;
    });
}

export function getPetDetail(petId: string):Promise<Pet> {
    return axios.get(`${baseUrl}/${petId}`,config).then((response) => {
    return response.data.animal;
    });
}
    export function searchAvailablePets(type:string, age:string, gender:string, size:string, goodWithChildren:string, goodWithDogs:string, goodWithCats:string, location:string):Promise<Pet[]> {
        // https://api.petfinder.com/v2/animals?type=dog&size=Medium&gender=Male
        let query = '';
        if(type){
            query.concat(`?type=${type}`)
        }
        if(gender){
            query.concat(`?gender=${gender}`)
        }
        if(age){
            query.concat(`?age=${age}`)
        }
        if(size){
            query.concat(`?size=${size}`)
        }
        if(goodWithChildren){
            query.concat(`?good_with_children=${goodWithChildren}`)
        }
        if(goodWithDogs){
            query.concat(`?good_with_dogs=${goodWithDogs}`)
        }
        if(goodWithCats){
            query.concat(`?good_with_cats=${goodWithCats}`)
        }
        if(location){
            query.concat(`?location=${location}`)
        }
        
        return axios.get(`${baseUrl}/${query}`,config).then((response) => {
        return response.data.animals;
        });


}
