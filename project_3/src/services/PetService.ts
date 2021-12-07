import Pet from '../models/pet'
import axios from "axios";


const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJoaWhTT1oyNERKYmN5VGJqUXdJQUJ4akhCU1gzVHBVdW56VjNOaWRhdENrbkNva2Q4dCIsImp0aSI6IjFlNmZhZDI2ODUzOTAzZjdmNmYwZTIyNGY2NDZiNTcyNTc4OWFhN2M3M2RlZmE0YTQxYTYxZmRkNmRkODQwMDI4YzNjY2YyNWNmMzQwODgyIiwiaWF0IjoxNjM4ODI0NTE1LCJuYmYiOjE2Mzg4MjQ1MTUsImV4cCI6MTYzODgyODExNSwic3ViIjoiIiwic2NvcGVzIjpbXX0.LgqJuPcY5ehBi2j-uoU2u6Oc34WGQoMVPqCODNOIBYrCevC2YSP9_REH8M0Hk5aY2nGtF6rj17AYtny2DM-1SaWfaOdVL8ybv8XilfK-ALxUr2bGuD6oWVd486qgQyJ5yRPd8_nB74y5Sec5i9peVJfa-4vZnDFWn7xoYabaBnQhkOdoMuCBCPiFPDQ2NqCLa2zmHzD2hhTZ_DgEtgSa6hVUZxwOTYbyBmy2zJSWyFMOO5GBxj3v1UfBNecFrTc2cu3A23EqoOhlcUysrID5n36QuR-Boi0uLFcl01hXzsv7AtaLKnwW6FSvrzCS9bbIQDL-LtXD-f5gl4LWR8-vCw'
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
