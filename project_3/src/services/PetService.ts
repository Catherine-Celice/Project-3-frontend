import Pet from '../models/pet'
import axios from "axios";


const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJoaWhTT1oyNERKYmN5VGJqUXdJQUJ4akhCU1gzVHBVdW56VjNOaWRhdENrbkNva2Q4dCIsImp0aSI6ImI5YTEwMWMyYmE1MDdjY2ZhY2U4MWMyNjgzZjA2Y2VhNjE2ODYwMjA0ZTBhODU4ZmFmYzQxMDkyOGJhNzgyMDgwMDQ1NjU3Y2E4ZTQxOGM3IiwiaWF0IjoxNjM4NDk4Njk5LCJuYmYiOjE2Mzg0OTg2OTksImV4cCI6MTYzODUwMjI5OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.GEDSDJTKoW9K4-Qfrn3At2XXMxPmPxocgeLwTJ1r4hNHT8GQR9zWBsOD1qEojZd3fv4Rmniyehcwzs1ijTDFEA5S_WpCnZ03_B-DtGjfjcC3qXPCiA7UCPHR2sy9Ta1zUuIVNh06h5utwBU0MkzIiNchE-IawE6OCvNnKJNPZsLmKWZqhTJq2YtunBCWwZMjtN3V3cwwzDqXjdZWXWaw6F_RrLYiNnpxEDRWk4Za-h-EWHaM2GTlu49LlsBGgV53vzMZrzVgYjZL-VYS0Sh8qLNB2dtRKWdWwbSnZTpMoRVTV9neEf08D2NrJAmCDRi-TxHyaIiIqYcPzTz63nHOBg'
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
