import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pet from "../models/pet";
import { getAllPets } from '../services/PetService'
import DesktopNav from "./DesktopNav";


function PetList() {
    const [ pets, setPets ] = useState<Pet[]>([]);  
    const navigate = useNavigate();
    
      function getPetList() {
        getAllPets().then((data) => {
            setPets(data);
        });
      }

      useEffect(() => {
        getPetList();
      }, []);

      const handleRoute = (petId:string) =>{ 
            navigate(`/viewpets/${petId}`);
      }
  
      return (
        <>

        <div className="PetList">
          <ul style={{listStyle: "none"}}> 
            {pets.map(pet => <li key={pet.id}>
              { pet.photos!?.length > 0 ? <img style={{width:"150px", height:"150px"}} className='petPic'src={pet.photos[0].large} alt="pet" onClick={() => handleRoute(String(pet.id))}/> 
                :  <img style={{width:"150px", height:"150px"}} className='petPic'src="/images/Avatars/dog1_avatar.png" alt="pet" onClick={() => handleRoute(String(pet.id))}/> 
              }
              <p className='petName'>{pet.name}, {pet.age}</p>
              <p className='petBreed'>{pet.breeds.primary}</p>
              <p className='petLocation'>{pet.contact?.address.postcode}</p>
            </li>)}
          </ul>
        </div>
        </>
      );
  }

export default PetList;