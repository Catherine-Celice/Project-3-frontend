import { useContext, useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import { UserContext } from "../context/UserContextProvider";
import '../styles/PetFavs.css';
import DesktopNav from "./DesktopNav";
import Popup from "./Popup";

function PetFavs() {
  const { user } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  return (
    <>
    <DesktopNav></DesktopNav>
      { isOpen && <Popup 
      handleClose={() => {setIsOpen(!isOpen)}}
      content={<div><h3>Pet has been added to Favorites.</h3>
      </div>}
    />}
      <h2 className=''>{user.firstname}'s Favorite Pets</h2>
      {user.petList.length === 0 ? (
        <h3 className=''>There are no favorite pets.</h3>
      ) : (
        <div>
        <ol>
            {user.petListDetails!.map((pet) => {
                return (
                    <TinderCard  key={pet.id}  >
                    {pet.photos!?.length > 0
                      ? <div className='card' id='cardimg' style={{ backgroundImage: 'url(' + pet.photos[0].large + ')' }} >
                        <div className="cardContent">
                          <p className='petName'>{pet.name}, {pet.age}</p>
                          <p className='petBreed'>{pet.breeds.primary}</p>
                          {/* <p className='petLocation'>{pet.contact?.address.postcode}</p> */}
                        </div>
                      </div>
                      : <div className='card' id='cardavatar' style={{ backgroundImage: 'url(/images/Avatars/dog1_avatar.png)' }}>
                        <div className="cardContent">
                          <p className='petName'>{pet.name}, {pet.age}</p>
                          <p className='petBreed'>{pet.breeds.primary}</p>
                          {/* <p className='petLocation'>{pet.contact?.address.postcode}</p> */}
                        </div>
                      </div>
                    }
                  </TinderCard>
                )
            })
            }
        </ol>
    </div>
      )}
    </>
  );
}

export default PetFavs;