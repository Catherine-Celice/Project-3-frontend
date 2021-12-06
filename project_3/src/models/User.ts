import Preferences from './preferences';

export default interface User {
    _id?: string;
    firstname: string;
    lastname: string;
    email: string;
    phone?: string;
    password1: string;
    image?: string;
    zip?: string;
    aboutme?: string;
    preferences?: Preferences;
    petList?: string[];
};
// CAC: In this (frontend) version of the User I declared _id to be a string rather
// than an ObjectId because that is what Megan did in her firebase lab code.
