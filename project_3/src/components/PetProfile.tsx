import { FormEvent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Pet from "../models/pet";
import { getPetDetail } from "../services/PetService";
import '../styles/PetProfile.css';
import DesktopNav from "./DesktopNav";

//function UsersList({user}: Props) {
function PetProfile() {
  const { petId } = useParams();
  const [pet, setPet] = useState<Pet>();

  function getPetDetails() {
    if (petId) {
      getPetDetail(petId).then((data) => {
        setPet(data);
      });
    }
  }

  useEffect(() => {
    getPetDetails();
  }, []);

  return (
    <>
      <DesktopNav></DesktopNav>
      {pet &&
        <div className="PetProfile">
          <div className="ProfileCard">
            <div className="PetProfileImages">
              <p>{pet.photos.map((pics) => { return <img style={{ width: "200px", height: "200px" }} className='petPic' src={pics.large} alt="pet" /> })}</p>
            </div>
            <p className="PetProfileName">{pet.name}, {pet.age}</p>
            <p className="PetProfileBreed">{pet.breeds.primary} - {pet.type}</p>
            <h4>Location</h4>
            <p>{pet.contact?.address.city}, {pet.contact?.address.state}</p>
            <h4>About Me</h4>
            <p className="PetDescription">{pet.description}</p>
            <p>{pet.attributes.special_needs}</p>
            <button id="orangebtn"><a href={pet.url} className="buttons">Adopt Me</a></button>
          </div>
        </div>
      }
    </>
  );
}

export default PetProfile;