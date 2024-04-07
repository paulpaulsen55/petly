import { writable, get } from "svelte/store";
import type { Pet } from "./api";

function userFunc() {
    const store = writable<string | null>(null);
    const { subscribe, set, update } = store;
    return {
        subscribe,
        login: (value: string | null) => set(value),
        update: (value: string | null) => update(_=>value),
        get: () => get(store),
        logout: () => set(null)
    };
}
export const user = userFunc();

export const money = writable<number>(0);

export const pet = writable<Pet | null>(null);