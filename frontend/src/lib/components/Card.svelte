<script lang="ts">
    import type { Pet } from "$lib/api";
    import { createEventDispatcher } from "svelte";

    export let pet: Pet;
    export let action = "";
    export let buyable = false;

    const dispatcher = createEventDispatcher();

    let card: HTMLElement;

    function performAction() {
        dispatcher("action", { pet });
    }

    function rotateToMouse(e: MouseEvent) {
        if (!card) return;

        const bounds = card.getBoundingClientRect();

        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const leftX = mouseX - bounds.x;
        const topY = mouseY - bounds.y;
        const center = {
            x: leftX - bounds.width / 2,
            y: topY - bounds.height / 2,
        };
        const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

        card.style.transform = `
            scale3d(1.07, 1.07, 1.07)
            rotate3d(
            ${center.y / 100},
            ${-center.x / 100},
            0,
            ${Math.log(distance) * 2}deg
            )
        `;

        // @ts-ignore
        card.querySelector(".glow").style.backgroundImage = `
            radial-gradient(
            circle at
            ${center.x * 2 + bounds.width / 2}px
            ${center.y * 2 + bounds.height / 2}px,
            #ffffff55,
            #0000000f
            )
        `;
    }
</script>

<button
    class="card"
    on:mouseenter={() => {
        document.addEventListener("mousemove", rotateToMouse);
    }}
    on:mouseleave={() => {
        document.removeEventListener("mousemove", rotateToMouse);
    }}
    on:click={() => {
        if (action != "") performAction();
    }}
    bind:this={card}
    style={`backdrop-filter: hue-rotate(${(pet.color / 15) * 10}deg) saturate(${(pet.color / 15) * 10}); filter: hue-rotate(${(pet.color / 15) * 360}deg) saturate(${(pet.color / 15) * 100});`}
>
    <div class="flex justify-between w-full">
        <p>{pet.name}</p>
        {#if buyable}
            <p>
                {pet.price}
                <img src="/fish.svg" alt="fish" class="size-6 inline" />
            </p>
        {:else}
            <p>Level {pet.level}</p>
        {/if}
    </div>
    {#if action != ""}
        <div
            class="absolute bottom-0 left-0 right-0 p-3 bg-p-dark rounded-b-lg"
            id="action"
        >
            <p>{action}</p>
        </div>
    {/if}
    <div class="glow" />
</button>

<style lang="postcss">
    .card {
        overflow: hidden;
        font-weight: bold;
        padding: 1em;
        color: white;
        display: flex;

        width: 300px;
        height: 300px;
        box-shadow: 0 1px 5px #00000099;

        border-radius: 10px;
        background-image: url("/cat.png");
        image-rendering: pixelated;
        background-size: cover;

        position: relative;

        transition-duration: 300ms;
        transition-property: transform, box-shadow;
        transition-timing-function: ease-out;
        transform: rotate3d(0);
    }

    .card:hover {
        transition-duration: 150ms;
        box-shadow: 0 5px 20px 5px #00000044;
    }

    #action {
        transition: transform 150ms ease-out;
        transform: translateY(150%);
    }

    .card:hover #action {
        transform: translateY(0);
    }

    .card .glow {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;

        background-image: radial-gradient(
            circle at 50% -20%,
            #ffffff22,
            #0000000f
        );
    }
</style>
