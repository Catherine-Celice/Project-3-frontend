import { FormEvent, useEffect, useState } from "react";
import Pet from "../models/Pet";
import '../styles/PetProfile.css';

//function UsersList({user}: Props) {
    function PetProfile() {
        const [pets, setPets] = useState<Pet[]>([
            // {id: 23, url: "https://c2experience.com", type: "dog", species: "dog", name: "Luci", age: "Puppy", "German Shepherd", description: "Adorable puppy looking for forever home.If you are really interested in this animal for a pet, please fill out an application and email it in."},
        ]);
        return (
          <div className="PetProfile">
            <div className="Profile">
              <p>{pets[0].name}, {pets[0].age}</p>
              {/* <p>{pets[0].breeds}</p>
              <p>{pets[0].contact}</p> */}
              <p>{pets[0].description}</p>
              {/* <p>{pets[0].photos}</p> */}
              {/* <p>{pets[0].attributes}</p> */}
            </div>
          </div>
        );
      }
      
      export default PetProfile;