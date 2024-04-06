<script lang="ts">
    import { goto } from "$app/navigation";
    import { money, user } from "$lib/store";
    import { Menu } from "lucide-svelte";

    function toggleMenu() {
        document.getElementById("nav")?.classList.toggle("hidden");
    }

    function logout() {
        user.logout();
        goto("/");
    }
</script>

<header
    class="flex justify-between items-center py-5 w-full transition-all sticky top-0 left-0"
>
    <img src="/logo.svg" alt="logo" class="size-8 sm:hidden" />
    <button type="button" class="sm:hidden" on:click={() => toggleMenu()}>
        <Menu size="24" />
    </button>
    <nav
        class="justify-between hidden sm:flex w-full absolute sm:relative top-16 sm:top-0 left-0 p-5 sm:p-0"
        id="nav"
    >
        <div
            class="items-center gap-2 sm:gap-10 flex flex-col sm:flex-row mb-10 sm:mb-0"
        >
            <img src="/logo.svg" alt="logo" class="size-8 hidden sm:block" />
            <a href="/" class="relative group">
                <span>Start</span>
                <span
                    class="absolute bottom-0 left-0 w-0 h-0.5 bg-p-blue transition-all group-hover:w-full"
                ></span>
            </a>
            <a href="/info" class="relative group">
                <span>Info</span>
                <span
                    class="absolute bottom-0 left-0 w-0 h-0.5 bg-p-blue transition-all group-hover:w-full"
                ></span>
            </a>
            <a href="/adopt" class="relative group">
                <span>Adoptieren</span>
                <span
                    class="absolute bottom-0 left-0 w-0 h-0.5 bg-p-blue transition-all group-hover:w-full"
                ></span>
            </a>
        </div>
        <div class="items-center gap-2 sm:gap-10 flex flex-col sm:flex-row">
            {#if $user !== null}
                <p class="text-p-blue">
                    {$money}
                    <img src="/fish.svg" alt="fish" class="size-6 inline" />
                </p>
                <button class="relative group" on:click={() => logout()}>
                    Logout
                    <span
                        class="absolute bottom-0 left-0 w-0 h-0.5 bg-p-blue transition-all group-hover:w-full"
                    ></span>
                </button>
                <a href="/account" class="relative group">
                    <span>Account</span>
                    <span
                        class="absolute bottom-0 left-0 w-0 h-0.5 bg-p-blue transition-all group-hover:w-full"
                    ></span>
                </a>
            {:else}
                <a href="/account" class="relative group">
                    <span>Login</span>
                    <span
                        class="absolute bottom-0 left-0 w-0 h-0.5 bg-p-blue transition-all group-hover:w-full"
                    ></span>
                </a>
                <a
                    href="/account"
                    class="group relative overflow-hidden bg-p-blue p-3 rounded-lg text-p-black"
                >
                    <span>Registrieren</span>
                    <div
                        class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-60 group-hover:animate-shine"
                    />
                </a>
            {/if}
        </div>
    </nav>
</header>
