import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pet from "../models/pet";
import { getPetDetail } from "../services/PetService";
import '../styles/PetProfile.css';

//function UsersList({user}: Props) {
    function PetProfile() {
      const { petId } = useParams();
      
        // const [pets, setPets] = useState<Pet[]>([
        //     // {id: 23, url: "https://c2experience.com", type: "dog", species: "dog", name: "Luci", age: "Puppy", "German Shepherd", description: "Adorable puppy looking for forever home.If you are really interested in this animal for a pet, please fill out an application and email it in."},
        // ]);

    const [ pet, setPet ] = useState<Pet>();  
    
      function getPetDetails() {
        if(petId){
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
          { pet &&
          <div className="PetProfile">
            <div className="Profile">
              {/* <p>{pets[0].name}, {pets[0].age}</p> */}
              {/* <p>{pets[0].breeds}</p>
              <p>{pets[0].contact}</p> */}
              {/* <p>{pets[0].description}</p> */}
              {/* <p>{pets[0].photos}</p> */}
              {/* <p>{pets[0].attributes}</p> */}
              <p>{pet.name}, {pet.age}</p>
              <p>{pet.breeds.primary} - {pet.type}</p>
              <p>{pet.description}</p>
              {/* <p>{pet.photos}</p> */}
              <p>{pet.photos.map((pics) => {return <img style={{width:"150px", height:"150px"}} className='petPic'src={pics.large} alt="pet"/>})}</p>
              <p></p>
              <p>{pet.attributes.special_needs}</p>
              <a href={pet.url}>Adopt Me</a>
            </div>
          </div>
          }
          </>
        );
      }
      
      export default PetProfile;