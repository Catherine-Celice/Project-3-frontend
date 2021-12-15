import { useState, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import Pet from "../models/pet";
import { getAllPets, searchAvailablePets } from '../services/PetService'
import TinderCard from 'react-tinder-card'
import React from "react";
import '../styles/PetList.css';
import DesktopNav from "./DesktopNav";
import { UserContext } from "../context/UserContextProvider";
import Popup from "./Popup";

function PetList() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [lat, setLat] = useState<number>(42.328385);
  const [long, setLong] = useState<number>(-83.044322);
  const { user, addFavPet } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);


  const swiped = (direction: string, petId: string) => {
    if(user.isLoggedIn){
    if (direction === 'right') {
      addFavPet(petId);
      setIsOpen(true);
    }else if(direction === 'left') {
      const index: number = pets.findIndex((pet) => pet.id === Number(petId));
      setPets((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
      console.log(pets.length);
    }    
    }else{
      console.log(direction);
    }
  }

  const outOfFrame = (name: string) => {
    console.log(name + ' left the screen!')
  }

  const navigate = useNavigate();

  function getPetList() {
    getAllPets(lat,long).then((data) => {
      setPets(data);
    });
  }
  
  function getPetMatches() {
    searchAvailablePets(user.preferences, user.zip).then((data) => {
      setPets(data);
    });
  }

  useEffect(() => {
    if(user.isLoggedIn){
      getPetMatches();
    }else{
            navigator.geolocation.getCurrentPosition((pos) =>{
            console.log(pos.coords.latitude + " " + pos.coords.longitude) // display VALUE
            setLat(pos.coords.latitude);
            setLong(pos.coords.longitude) 
       }, (err) => {
            console.log(err);
       });
      getPetList();
    }
  }, [lat, long]);

  const handleRoute = (petId: string) => {
    navigate(`/viewpets/${petId}`);
  }

  return (
    <>
    <DesktopNav></DesktopNav>
    { isOpen && <Popup 
      handleClose={() => {setIsOpen(!isOpen)}}
      content={<div>
        <h3>Pet has been added to Favorites.</h3>
      </div>}
    />}
    <div>
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
