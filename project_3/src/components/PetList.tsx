import { useState, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import Pet from "../models/pet";
import { getAllPets } from '../services/PetService'
import TinderCard from 'react-tinder-card'
import React from "react";
import '../styles/PetList.css';
import DesktopNav from "./DesktopNav";
import { UserContext } from "../context/UserContextProvider";


function PetList() {
  const [pets, setPets] = useState<Pet[]>([]);
  const { user, addFavPet, removeFavPet } = useContext(UserContext);

  const swiped = (direction: string, petId: string) => {
    if(user.isLoggedIn){
    if (direction === 'right') {
      addFavPet(petId);
    }else if(direction === 'left') {
      const index: number = pets.findIndex((pet) => pet.id === Number(petId));
      setPets((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
      console.log(pets.length);
    }    
    }else(
      alert('Please login to add favorites.')
    )
  }

  const outOfFrame = (name: string) => {
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

  const handleRoute = (petId: string) => {
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
    <>
    <DesktopNav></DesktopNav>
    <div>
    <p>{user.firstname} {user.lastname}</p>
      <div className="Discover">
      <h1 className="Disch1">Discover</h1>
        <div className='cardContainer'>
          {pets.map((pet) =>
            <TinderCard className='swipe' key={pet.id} onSwipe={(dir) => swiped(dir, String(pet.id))} onCardLeftScreen={() => outOfFrame(String(pet.id))}>
              {pet.photos!?.length > 0
                ? <div className='card' id='cardimg' style={{ backgroundImage: 'url(' + pet.photos[0].large + ')' }} onClick={() => handleRoute(String(pet.id))}>
                  <div className="cardContent">
                    <p className='petName'>{pet.name}, {pet.age}</p>
                    <p className='petBreed'>{pet.breeds.primary}</p>
                    {/* <p className='petLocation'>{pet.contact?.address.postcode}</p> */}
                  </div>
                </div>
                : <div className='card' id='cardavatar' style={{ backgroundImage: 'url(/images/Avatars/dog1_avatar.png)' }} onClick={() => handleRoute(String(pet.id))}>
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
        {/* <div className="noyes">
          <div className="dislike"><img className="dislikeIcon" src="/images/Avatars/dislike.png" width="100" /><p>Swipe Right to Leave</p></div>
          <div className="like"><img className="dislikeIcon" src="/images/Avatars/like.png" width="100" /><p>Swipe Left to Favorite</p></div>
        </div> */}
      </div>
    </div>
    </>
  )
}

export default PetList;