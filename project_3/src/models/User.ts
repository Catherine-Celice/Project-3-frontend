import CreateYourProfile from "../components/CreateYourUserProfile"
import { addUser } from "../services/UserService"

export default interface User {
    _id?: string;
    firstname: string;
    lastname: string;
    email: string;
    phone?: string;
    userID: string;
    password1: string;      // CAC: I had to add the 1 to this
                            // to get rid of an error in addUser() in CreateYourProfile.tsx

};

// CAC: In this (frontend) version of the User I declared _id to be a string rather
// than an ObjectId because that is what Megan did in her firebase lab code.
