<script>
    import { ArrowUpRight } from "lucide-svelte";
</script>

<main class="space-y-80 my-20">
    <section class="space-y-20">
        <h2 class="text-p-blue text-5xl">Tritt jetzt bei</h2>
        <p class="text-p-gray">
            Wir sind immer auf der Suche nach neuen Mitgliedern, die unsere
            Community wachsen lassen. <br /> Wir freuen uns auf dich!
        </p>
        <div class="grid xl:grid-cols-3 gap-5">
            <div
                class="border-2 border-p-white rounded-lg p-5 flex flex-col justify-end relative gap-10 h-full"
            >
                <div
                    class="absolute bottom-20 bg-p-white -mx-5 h-[2px] w-full"
                ></div>
                <h3 class="text-p-blue text-3xl self-start">Habe Spaß</h3>
                <p class="text-p-gray">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                </p>
                <a
                    href="#"
                    class="text-p-white text-xl group relative w-full flex items-center justify-between"
                >
                    <span>Learn more</span>
                    <ArrowUpRight
                        color="#fff"
                        size="48"
                        class="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                    />
                </a>
            </div>
            <div
                class="border-2 border-p-white rounded-lg p-5 flex flex-col justify-end relative gap-10 h-full"
            >
                <div
                    class="absolute bottom-20 bg-p-white -mx-5 h-[2px] w-full"
                ></div>
                <h3 class="text-p-blue text-3xl self-start">
                    Entdecke neue Welten
                </h3>
                <p class="text-p-gray">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                </p>
                <a
                    href="#"
                    class="text-p-white text-xl group relative w-full flex items-center justify-between"
                >
                    <span>Learn more</span>
                    <ArrowUpRight
                        color="#fff"
                        size="48"
                        class="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                    />
                </a>
            </div>
            <div
                class="border-2 border-p-white rounded-lg p-5 flex flex-col justify-end relative gap-10 h-full"
            >
                <div
                    class="absolute bottom-20 bg-p-white -mx-5 h-[2px] w-full"
                ></div>
                <h3 class="text-p-blue text-3xl self-start">Unterstütze uns</h3>
                <p class="text-p-gray">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                </p>
                <a
                    href="#"
                    class="text-p-white text-xl group relative w-full flex items-center justify-between"
                >
                    <span>Learn more</span>
                    <ArrowUpRight
                        color="#fff"
                        size="48"
                        class="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                    />
                </a>
            </div>
        </div>
    </section>

    <section class="space-y-20">
        <h3 class="text-p-blue text-5xl">Wie funktioniert es?</h3>
        <div class="grid xl:grid-cols-3 gap-5">
            <div class="border-2 border-p-white rounded-lg p-5">
                <h4 class="text-p-blue text-3xl">1. Registrieren</h4>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                </p>
            </div>
            <div class="border-2 border-p-white rounded-lg p-5">
                <h4 class="text-p-blue text-3xl">2. Adoptieren</h4>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                </p>
            </div>
            <div class="border-2 border-p-white rounded-lg p-5">
                <h4 class="text-p-blue text-3xl">3. Spielen und mehr adoptieren</h4>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                </p>
            </div>
        </div>
    </section>

    <section class="lg:p-10 bg-p-dark rounded-lg grid grid-cols-2">
        <div class="space-y-10">
            <h3 class="text-p-blue text-5xl">Verpass keine Neuigkeiten</h3>
            <p>
                Melde dich für unseren Newsletter an und erhalte regelmäßig
                Informationen zu neuen Features und Updates.
            </p>
        </div>
        <a href="#" class="bg-p-blue text-p-black p-3 rounded-lg w-fit h-fit place-self-center"
            >Newsletter</a
        >
    </section>
</main>
