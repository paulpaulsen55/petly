<script lang="ts">
    import { ArrowUpRight, MoveRight } from "lucide-svelte";
</script>

<main>
    <section class="grid md:grid-cols-2 h-[50vh] items-end">
        <img
            src="/bg.svg"
            alt=""
            class="absolute hidden sm:block top-1/2 left-0 opacity-60 -z-0"
        />
        <h1 class="text-6xl">petly <br /> dein virtuelles Haustier</h1>
        <aside class="justify-self-end grid gap-5">
            <p class="break-words max-w-[35rem] right-0">
                Tauche ein in ein grenzenloses Vergnügen und verbessere dein
                Tier! Beginne direkt hier:
            </p>
            <a
                href="/adopt"
                class="border-p-blue border-2 rounded-lg p-3 w-fit hover:drop-shadow-glow transition z-10"
                >Adoptieren</a
            >
        </aside>
    </section>

    <section
        class="grid sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 my-40 items-center gap-2 z-10"
    >
        <aside
            class="flex flex-col space-y-5 bg-p-white text-p-black p-5 rounded-lg row-span-2 z-10"
        >
            <p class="self-end text-p-white bg-p-dark p-3 rounded-lg">
                + 10 variationen
            </p>
            <p class="self-end text-p-white bg-p-dark p-3 rounded-lg">
                + 100 aktive Nutzer
            </p>
            <h3 class="text-3xl">Wilkommen bei Petly</h3>
            <p class="border-l-4 pl-2 border-p-dark m-2 text-p-dark">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
            </p>
        </aside>
        <a
            href="/info"
            class="group relative bg-p-white text-p-black p-5 rounded-lg lg:col-span-2 h-full hover:drop-shadow-gw transition"
        >
            <h3 class="text-xl">Informationen zum Spiel</h3>
            <p class="text-p-dark text-sm">
                Wie funktioniert das Spiel eingentlich?
            </p>
            <ArrowUpRight
                size="64"
                class="absolute top-0 right-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition"
            />
        </a>
        <a
            href="/adopt"
            class="group relative bg-p-white text-p-black p-5 rounded-lg h-full hover:drop-shadow-gw transition"
        >
            <h3 class="text-xl">Adoptieren</h3>
            <p class="text-p-dark text-sm">Siehe dir die aktuelle Auswahl an</p>
            <ArrowUpRight
                size="64"
                class="absolute top-0 right-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition"
            />
        </a>
        <a
            href="/account"
            class="group relative bg-p-blue text-p-black p-5 rounded-lg h-full hover:drop-shadow-gb transition"
        >
            <h3 class="text-xl">Starte das Spiel</h3>
            <p class="text-p-dark text-sm">
                Sobald du Eingeloggt bist kann es schon los gehen
            </p>
            <ArrowUpRight
                size="64"
                class="absolute top-0 right-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition"
            />
        </a>
    </section>

    <section class="my-32 z-10">
        <h1
            class="text-9xl text-p-black z-10"
            style="-webkit-text-stroke: 1px #F8F8F8; text-shadow: 0px 1px 4px #23430C;"
        >
            Starte jetzt durch
            <MoveRight
                size="64"
                class="text-p-blue border-2 border-p-white rounded-lg px-5 inline-block w-fit"
            />
        </h1>
    </section>
</main>
