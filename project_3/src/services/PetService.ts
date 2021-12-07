import Pet from '../models/pet'
import axios from "axios";


const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJoaWhTT1oyNERKYmN5VGJqUXdJQUJ4akhCU1gzVHBVdW56VjNOaWRhdENrbkNva2Q4dCIsImp0aSI6ImY4NmJjOGI0MmUxODVjMWIxNGEzMjg4MWQ3YWM3NjJkYjc5ZDEzZDUyMzIxOTE3OTRjYzFiMTNiNDY1ZjI1NTVlMWM5OTI4MzI3ZmM5Y2M2IiwiaWF0IjoxNjM4ODQzNDk4LCJuYmYiOjE2Mzg4NDM0OTgsImV4cCI6MTYzODg0NzA5OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.Fu2C0r3fkSPDOT4NaNtBd03ceKPb9ehVpdyoc4_gM_XOUNHoDi3rXpVNXbOSlZ9clqwlEllZb2Rw845sP6B087vAlcfhapiSzbgC6HrnhpVLeOAymBWyRK9vw3Z2_ydK1CyXozuTOst5qbBBOeYRbUfiDgcnN5aWAbT9dj25VsG9vOVoUuBo3OHZFqxp4rtbH7dJMQZmgfAhYSVN6-pRbcvDhXod47gKOU8RIjQaCNsj9A5zdOGuDIwxdosc2SjSbKXwysYMx7nZhedK4pTElT6mafQPH3Y9tVYWxcWNrRpADrmflBBHtLQMnDvm8cnPcDKIFaUl3TKz-AnlXLcQVQ'
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
