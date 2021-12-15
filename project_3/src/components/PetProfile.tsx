import { FormEvent, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Pet from "../models/pet";
import { getPetDetail } from "../services/PetService";
import '../styles/PetProfile.css';
import DesktopNav from "./DesktopNav";

//function UsersList({user}: Props) {
function PetProfile() {
  const { petId } = useParams();
  const [pet, setPet] = useState<Pet>();
  const navigate = useNavigate();


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
          {/* <button className="BackBtn" onClick={() => navigate(-1)}>Back</button> */}
          <div className="ProfileCard">
            <div className="PetProfileImages">
              <p>{pet.photos.map((pics) => { return <img style={{ width: "auto", height: "270px" }} className='petPic' src={pics.large} alt="pet" /> })}</p>
            </div>
            <div className="noyes">
              <div className="dislike" onClick={() => navigate(-1)}><img className="noyesIcon" src="/images/Avatars/dislike.png" width="120" /></div>
              <div className="like"><img className="noyesIcon" src="/images/Avatars/like.png" width="120" /></div>
            </div>
            <div className="PetProfileContent">
              <p className="PetProfileName">{pet.name}, {pet.age}</p>
              <p className="PetProfileBreed">{pet.breeds.primary} - {pet.type}</p>
              <h4>Location</h4>
              <p>{pet.contact?.address.city}, {pet.contact?.address.state}</p>
              <h4>About {pet.name}</h4>
              <p className="PetDescription">{pet.description}</p>
              <div className="tags">
                <p className="tag">{pet.gender}</p>
                <p className="tag">{pet.size}</p>
                <p className="tag">{pet.coat}</p>
                {/* <p className="tag">{pet.attributes.spayed_neutered}</p>
            <p className="tag">{pet.attributes.house_trained}</p>
            <p className="tag">{pet.attributes.declawed}</p>
            <p className="tag">{pet.attributes.special_needs}</p>
            <p className="tag">{pet.environment?.children}</p>
            <p className="tag">{pet.environment?.dogs}</p>
            <p className="tag">{pet.environment?.cats}</p> */}
              </div>
              <button id="orangebtn"><a href={pet.url} style={{ color: "white" }}>Adopt Me</a></button>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default PetProfile;