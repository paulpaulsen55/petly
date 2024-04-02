import { writable, get } from "svelte/store";

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