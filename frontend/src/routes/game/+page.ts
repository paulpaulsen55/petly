import { pet, user } from '$lib/store';
import { redirect } from '@sveltejs/kit';


export async function load({ fetch }) {
    let localUser = null;
    const unscribe = user.subscribe(value => {
        localUser = value;
    });

    if (!localUser) {
        redirect(302, '/lockscreen');
    }

    let localPet = null;
    pet.subscribe(value => {
        localPet = value;
    });

    if (!localPet) {
        redirect(302, '/game');
    }

    unscribe();

    return {
        props: {
            pet: localPet
        }
    };
}