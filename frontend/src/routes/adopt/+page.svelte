<script lang="ts">
    import { goto } from "$app/navigation";
    import type { Pet } from "$lib/api";
    import Card from "$lib/components/Card.svelte";
    import { money, user } from "$lib/store";
    import { Loader2 } from "lucide-svelte";

    let promise = allPets();

    async function allPets() {
        const res = await fetch("http://localhost:3000/allPets");
        const data: { pets: Pet[] } = await res.json();
        data.pets.sort((a, b) => a.price - b.price);

        return data.pets;
    }

    function adopt(pet: Pet) {
        if (!$user) {
            goto("/lockscreen");
            return;
        }

        if ($money < pet.price) return;

        fetch("http://localhost:3000/adopt", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ petName: pet.name, owner: $user }),
        }).then(() => {
            $money -= pet.price;
            goto("/account");
        });
    }
</script>

<main>
    <h2 class="text-4xl my-10">Wähle ein Haustier zum adoptieren aus:</h2>
    {#await promise}
        <div class="grid place-content-center h-[90vh]">
            <Loader2 size={64} class="animate-spin" />
        </div>
    {:then pets}
        <div class="flex flex-wrap gap-10 justify-center items-center mb-20">
            {#each pets as pet}
                <div class="grid place-content-center gap-2">
                    <Card
                        {pet}
                        action="Adoptieren"
                        buyable={true}
                        on:action={(pet) => adopt(pet.detail.pet)}
                    />
                </div>
            {/each}
        </div>
    {/await}
</main>
