//Pet profile for use with Pet-finder API

export default interface Pet {
    id: number;
    name: string;
    age: string;
    type: string;
    breed: string;
    size: string;
    gender: string;
    attributes: {
        spay_neuter: boolean;
        house_train: boolean;
        declawed: boolean;
        shots_current: boolean;
        special_needs: boolean;
    }
};