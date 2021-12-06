export default interface Pet {
    id: number,
    organization_id?: string,
    url: string,
    type: string,
    species: string,
    breeds: {
        primary: string,
        secondary: string,
        mixed: string,
        unknown: boolean
    },
    colors?: {
        primary: string,
        secondary: string,
        tertiary: string
    },
    age: string,
    gender: string,
    size: string,
    coat?: string,
    attributes: {
        spayed_neutered: boolean,
        house_trained: boolean,
        declawed: boolean,
        special_needs: boolean,
        shots_current: boolean
    },
    environment?: {
        children: boolean,
        dogs: boolean,
        cats: boolean
    },
    tags?: string[],
    name: string,
    description?: string,
    photos?: [
        {
            small: string
            medium: string
            large: string
            full: string
        }
    ],
    videos?: [
        {
            embed: string
        }
    ],
    status?: string,
    published_at?: string,
    contact?: {
        email: string,
        phone: string,
        address: {
            address1: string,
            address2: string,
            city: string,
            state: string,
            postcode: number,
            country: string
        }
    },
    _links?: {
        self: {
            href:string
        },
        type: {
            href: string
        },
        organization: {
            href: string
        }
    }
}