<script lang="ts">
    import { goto } from "$app/navigation";
    import { user } from "$lib/store";
    import { Tabs } from "bits-ui";
    import { Check, Loader2, X } from "lucide-svelte";

    let name = "";
    let password = "";
    let success = false;
    let validName = 0;
    let safeTimeoutForName = 0;
    let rule =
        "Regel: Nur Buchstaben und Unterstriche sind erlaubt. Mindestens 3 Zeichen.";

    function handleRegister() {
        fetch("http://localhost:3000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, password }),
        })
            .then((response) => {
                if (response.ok) {
                    success = true;
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    function checkName() {
        if (!isValidString(name)) {
            rule =
                "Regel: Nur Buchstaben und Unterstriche sind erlaubt. Mindestens 3 Zeichen.";
            validName = 0;
            return;
        }

        fetch("http://localhost:3000/checkName", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name }),
        })
            .then((response) => {
                if (response.ok) {
                    validName = 1;
                    rule = "Name ist verfügbar.";
                } else {
                    rule = "Name ist bereits vergeben.";
                    validName = 0;
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    function isValidString(str: string) {
        if (str.length <= 3) return false;
        const regex = /^[a-zA-Z0-9_]+$/;
        return regex.test(str);
    }

    function onNameChange() {
        validName = 2;
        clearTimeout(safeTimeoutForName);
        safeTimeoutForName = setTimeout(checkName, 500);
    }

    $: name && onNameChange();
</script>

{#if success}
    <p>Erfolgreich registiert!</p>
{:else}
    <form
        on:submit|preventDefault={handleRegister}
        class="flex gap-3 flex-col relative"
    >
        <label for="name">Name:</label>
        <div class="relative w-full" title={rule}>
            <input
                type="text"
                id="name"
                class="w-full text-p-black p-1 rounded-lg"
                bind:value={name}
                required
            />
            <div class="absolute h-full top-0 right-0 flex items-center">
                {#if validName === 0}
                    <X color="#fc1703" />
                {:else if validName === 1}
                    <Check color="#6ffc03" />
                {:else}
                    <Loader2 color="#000000" class="animate-spin" />
                {/if}
            </div>
        </div>
        <label for="password">Password:</label>
        <input
            type="password"
            id="password"
            class="w-full text-p-black p-1 rounded-lg"
            bind:value={password}
            required
        />

        <button
            type="submit"
            class="bg-p-blue text-p-black p-3 w-full rounded-lg"
            >Register</button
        >
    </form>
{/if}
