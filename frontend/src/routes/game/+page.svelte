<script lang="ts">
    import type { Pet } from "$lib/api";
    import { Progress } from "bits-ui";
    import type { PageData } from "./$types";
    import { onDestroy, onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { user, money } from "$lib/store";

    export let data: PageData;

    let pet: Pet = data.props.pet,
        value = 50,
        interval = 0,
        cooldown = false,
        level = pet.level;

    onMount(() => {
        interval = setInterval(() => {
            if (value <= 0) {
                goto("/account");
                clearInterval(interval);
                return;
            }
            value -= level;
        }, 1000);
    });

    onDestroy(() => {
        clearInterval(interval);
    });

    function action(v: number) {
        if (cooldown) return;
        value += v + pet.level;
        cooldown = true;

        setTimeout(() => {
            cooldown = false;
        }, 100 * (v + pet.level));
        }

        $: if (value >= 100 * pet.level) {
        level++;
        value = 20;
        
        $money += 10;

        fetch("http://localhost:3000/updateLevel", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                petName: pet.name,
                level: level,
                owner: $user,
            }),
        });
    }
</script>

<main class="grid gap-10 mb-20">
    <h1 class="text-6xl text-center py-10 relative drop-shadow-gb">
        Spielwiese🏕️
    </h1>
    <section class="border-2 border-p-white p-3 rounded-lg">
        <div
            class="grid place-items-center rounded-lg bg-[#77b255] relative"
            id="play"
        >
            <div class="flex items-center">
                <span class="text-3xl">😄</span>
                <Progress.Root
                    {value}
                    max={100 * level}
                    class="relative my-5 h-[15px] w-80 overflow-hidden rounded-full bg-dark-10 bg-p-dark"
                >
                    <div
                        class="h-full w-full flex-1 rounded-full bg-white shadow-mini-inset transition-all duration-1000 ease-in-out"
                        style={`transform: translateX(-${
                            100 - (100 * (value ?? 0)) / (100 ?? 1)
                        }%)`}
                    />
                </Progress.Root>
            </div>
            <h3 class="text-3xl text-center">{pet.name}</h3>
            <p>Level {level}</p>
            <img
                src="/cat.png"
                alt={pet.name}
                class="size-80 pixel"
                style={`filter: hue-rotate(${(pet.color / 15) * 360}deg) saturate(${(pet.color / 15) * 100});`}
            />
            <div
                class="bg-[#3E721D] p-5 flex justify-center items-center gap-5 rounded-lg w-full"
            >
                <button
                    class={`text-9xl transition ${cooldown ? "opacity-50" : ""}`}
                    disabled={cooldown}
                    on:click={() => action(10)}
                >
                    🍗
                </button>
                <button
                    class={`text-9xl transition ${cooldown ? "opacity-50" : ""}`}
                    disabled={cooldown}
                    on:click={() => action(15)}
                >
                    🏐
                </button>
                <button
                    class={`text-9xl transition ${cooldown ? "opacity-50" : ""}`}
                    disabled={cooldown}
                    on:click={() => action(20)}
                >
                    🤚
                </button>
            </div>
        </div>
    </section>
</main>

<style>
    #play {
        background-image: url("/grass.svg");
        background-size: 28%;
        background-repeat: repeat;
    }
</style>
