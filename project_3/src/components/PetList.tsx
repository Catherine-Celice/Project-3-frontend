import { useState, useEffect } from "react";
import Pet from "../models/pet";
import { getAllPets } from '../services/PetService'


export default function PetList() {
    const [ pets, setPets ] = useState<Pet[]>([]);  
    
      function getPetList() {
        getAllPets().then((data) => {
            setPets(data);
        });
      }

      useEffect(() => {
        getPetList();
      }, []);
  
      return (
        <div className="PetList">
          <ul>
            {pets.map(pet => <li key={pet.id}>
              <span className="a">{pet.name} </span>
              <span className="b">{pet.attributes.special_needs} </span>
              <span className="c">{pet.breeds.primary} </span>
              <span className="d">{pet.age}</span>
            </li>)}
          </ul>
        </div>
      );
  }

