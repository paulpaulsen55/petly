<script lang="ts">
    import { goto } from "$app/navigation";
    import Login from "$lib/components/lockscreen/Login.svelte";
    import Register from "$lib/components/lockscreen/Register.svelte";
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
                    goto("/account");
                } else {
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    
</script>

<main class="grid place-content-center h-[90vh]">
    <Tabs.Root value="login" class="w-[390px] p-">
        <Tabs.List
            class="grid w-full grid-cols-2 gap-1 rounded-9px bg-dark-10 p-1 text-sm font-semibold leading-[0.01em]"
        >
            <Tabs.Trigger
                value="login"
                class="text-xl font-bold py-2 border-b-2 data-[state=active]:border-p-blue data-[state=active]:text-p-blue"
            >
                Login
            </Tabs.Trigger>
            <Tabs.Trigger
                value="register"
                class="text-xl font-bold py-2 border-b-2 data-[state=active]:border-p-blue data-[state=active]:text-p-blue"
            >
                Register
            </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="login" class="pt-3 h-60">
            <Login />
        </Tabs.Content>
        <Tabs.Content value="register" class="pt-3 h-60">
            <Register />
        </Tabs.Content>
    </Tabs.Root>
</main>
