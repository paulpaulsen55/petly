<script lang="ts">
    import { pet, user } from "$lib/store";
    import type { PageData } from "./$types";
    import Card from "$lib/components/Card.svelte";
    import { goto } from "$app/navigation";

    export let data: PageData;

    function game(e: any) {
        pet.set(e.detail.pet);
        goto("/game");
    }
</script>

<main class="grid gap-10 mb-20">
    <h1 class="text-6xl text-center py-10 relative drop-shadow-gb">
        Hallo {$user}👋
    </h1>
    <section class="border-2 border-p-white p-3 rounded-lg">
        <h3 class="text-3xl mb-5 text-center">Deine Haustiere</h3>
        <ul class="flex flex-wrap gap-10 justify-center items-center mb-20">
            {#each data.props.pets as pet}
                <li>
                    <Card
                        {pet}
                        action={"Jetzt Spielen!"}
                        on:action={(e) => game(e)}
                    />
                </li>
            {:else}
                <p>Du hast noch keine Haustiere.</p>
                <a href="/adopt" class="text-p-blue underline">Adoptiere eins!</a>
            {/each}
        </ul>
    </section>
</main>
