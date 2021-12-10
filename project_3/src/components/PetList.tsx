import { useState, useEffect, useRef, SetStateAction, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Pet from "../models/pet";
import { getAllPets } from '../services/PetService'
import TinderCard from 'react-tinder-card'
import React from "react";


function PetList() {
    const [ pets, setPets ] = useState<Pet[]>([]);  
    const [lastDirection, setLastDirection] = useState<string>();
  
    const swiped = (direction:string, idToDelete:string) => {
      console.log('Direction', direction, 'NameToDelete', idToDelete);
      if(direction === 'right'){
        // addToFavorites()
      }
      console.log('removing: ' + idToDelete);
      setLastDirection(direction)
    }
  
    const outOfFrame = (name:string) => {
      console.log(name + ' left the screen!')
    }

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
  
      // return (
      //   <>
      //   <div className="PetList">
      //     <ul style={{listStyle: "none"}}> 
      //       {pets.map(pet => <li key={pet.id}>
              // { pet.photos!?.length > 0 ? <img style={{width:"150px", height:"150px"}} className='petPic'src={pet.photos[0].large} alt="pet" onClick={() => handleRoute(String(pet.id))}/> 
              //   :  <img style={{width:"150px", height:"150px"}} className='petPic'src="/images/Avatars/dog1_avatar.png" alt="pet" onClick={() => handleRoute(String(pet.id))}/> 
              // }
      //         <p className='petName'>{pet.name}, {pet.age}</p>
      //         <p className='petBreed'>{pet.breeds.primary}</p>
      //         <p className='petLocation'>{pet.contact?.address.postcode}</p>
      //       </li>)}
      //     </ul>
      //   </div>
      //   </>
      // );
      return (
        <div>
          <br /> <br />
          <h1>Discover</h1>
          <div className='cardContainer'>
            {pets.map((pet) =>
              <TinderCard className='swipe' key={pet.id} onSwipe={(dir) => swiped(dir, String(pet.id))} onCardLeftScreen={() => outOfFrame(pet.name)}>
                { pet.photos!?.length > 0
                  ? <div style={{ backgroundImage: 'url(' + pet.photos[0].large + ')'}} className='card'>
                    <div className="cardContent">
                          <p className='petName'>{pet.name}, {pet.age}</p>
                          <p className='petBreed'>{pet.breeds.primary}</p>
                          {/* <p className='petLocation'>{pet.contact?.address.postcode}</p> */}
                    </div>
                          </div>
                  : <div style={{ backgroundImage: 'url(/images/Avatars/dog1_avatar.png)' }} className='card'>
                    <div className="cardContent">
                          <p className='petName'>{pet.name}, {pet.age}</p>
                          <p className='petBreed'>{pet.breeds.primary}</p>
                          {/* <p className='petLocation'>{pet.contact?.address.postcode}</p> */}
                    </div>
                    </div>
                }
              </TinderCard>
            )}
          </div>
        </div>
      )
  }

export default PetList;