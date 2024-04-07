import type { Pet } from '$lib/api.js';
import { user } from '$lib/store';
import { redirect } from '@sveltejs/kit';

export async function load({fetch}) {
    let localUser = null;
    const unscribe = user.subscribe(value => {
        localUser = value;
    });

    if (!localUser) {
        redirect(302, '/lockscreen');
    }

    const response = await fetch(`http://localhost:3000/pets/${localUser}`);
    const pets = await response.json();
    
    unscribe();

    return {
        props: {
            pets: pets.pets as Pet[]
        }
    };
}