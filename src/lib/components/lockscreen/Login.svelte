<script lang="ts">
    import { goto } from "$app/navigation";
    import { money, user } from "$lib/store";
    import { Ban } from "lucide-svelte";

    let name = "";
    let password = "";
    let errorMsg = "";

    function handleLogin() {
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, password }),
        })
            .then((response) => {
                if (response.ok) {
                    user.login(name);
                    response.json().then((data) => {
                        money.set(data.money);
                        goto("/account");
                    });
                } else {
                    errorMsg = "Falscher Name oder Passwort";
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                errorMsg = "Fehler beim Login";
            });
    }
</script>

<form on:submit|preventDefault={handleLogin} class="flex gap-3 flex-col">
    {#if errorMsg !== ""}
        <div class="bg-red-100 text-red-600 w-full p-2 rounded-lg flex items-center">
            <Ban size={18} />
            <span class="truncate">{errorMsg}</span>
        </div>
    {/if}
    <label for="nameL">Name:</label>
    <input
        type="text"
        id="nameL"
        class="w-full text-p-black p-1 rounded-lg"
        bind:value={name}
        required
    >

    <label for="passwordL">Password:</label>
    <input
        type="password"
        id="passwordL"
        class="w-full text-p-black p-1 rounded-lg"
        bind:value={password}
        required
    >

    <button type="submit" class="bg-p-blue text-p-black p-3 w-full rounded-lg"
        >Login</button
    >
</form>
