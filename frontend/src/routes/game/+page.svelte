<script lang="ts">
    import type { Pet } from "$lib/api";
    import type { PageData } from "./$types";

    export let data: PageData;
    let pet: Pet = data.props.pet;
</script>

<main class="grid gap-10 mb-20">
    <h1 class="text-6xl text-center py-10 relative drop-shadow-gb">
        Spielwiese🏕️
    </h1>
    <section class="border-2 border-p-white p-3 rounded-lg">
        <h3 class="text-3xl mb-5 text-center">{pet.name}</h3>
        <div class="grid place-content-center rounded-lg" id="play">
            <img src="/cat.svg" alt={pet.name} class="size-80 pixel" style={`backdrop-filter: hue-rotate(${(pet.color / 15) * 10}deg) saturate(${(pet.color / 15) * 10}); filter: hue-rotate(${(pet.color / 15) * 360}deg) saturate(${(pet.color / 15) * 100});`} />
        </div>
    </section>
</main>

<style>
    #play {
        background-color: #77B255;
        background-image: url('/grass.png');
    }
</style>
