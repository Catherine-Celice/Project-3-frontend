import { createContext, ReactNode, useState } from "react";
import User from "../models/User";
import { addFavoritePet, removeFavoritePet } from "../services/UserService";

interface UserContextModel {
    user: User,
    setIsLoggedIn: (loggedIn: boolean) => void;
    addFavPet: (petId: string) => void;
    removeFavPet: (petId: string) => void;
  }
  
  const defaultValues: UserContextModel = {
    user: {firstname: '', lastname: '', email: '', password1: '', petList: [],isLoggedIn: false},
    setIsLoggedIn : () => { },
    addFavPet: () => { },
    removeFavPet: () => { }
  }
  
  export const UserContext = createContext(defaultValues);
    
  interface Props {
      children: ReactNode;
  }
  
  export const UserContextProvider = ({ children }: Props) => {
      const [user, setUser] = useState<User>({firstname: '', lastname: '', email: '', password1: '', petList: [],isLoggedIn: false});

      function setIsLoggedIn() {
        setUser(prev => {return {...prev, isLoggedIn: !prev.isLoggedIn}});
    }

      const addFavPet = (petId: string): void => {
        console.log('***********Here in context!!!!*************');
        setUser(prev => {return {...prev, petList:[...prev.petList, petId]}});
        addFavoritePet(user.email, user.password1, petId);
      };
     
      const removeFavPet = (id: string): void => {
          const index: number = user.petList.findIndex((petId) => petId === id);
          setUser(prev => {return {...prev, petList:[...prev.petList.slice(0, index), ...prev.petList.slice(index + 1)]}});
          removeFavoritePet(user.email, user.password1, id);
      };
      return (
          <UserContext.Provider value={{ user, setIsLoggedIn, addFavPet, removeFavPet }}>
              {children}
          </UserContext.Provider>
      );
  };