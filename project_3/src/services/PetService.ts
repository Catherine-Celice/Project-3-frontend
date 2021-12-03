import Pet from '../models/pet'
import axios from "axios";

const baseUrl = 'https://us-central1-lab1-7100b.cloudfunctions.net/api/';

export function getAllPets():Promise<Pet[]> {
    return axios.get<Pet[]>(`${baseUrl}`).then(response => response.data)
}
