<script>
    import { goto } from "$app/navigation";
    import { Tabs } from "bits-ui";

    let email = "";
    let password = "";

    function handleLogin() {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => {
            if (response.ok) {
                console.log(response);
                goto('/game');
            } else {
                console.log(response);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
        
    }

    function handleRegister() {
        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => {
            if (response.ok) {
                console.log(response);
            } else {
                console.log(response);
            }
        })
        .catch(error => {
            console.error('Error:', error);
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
            <form on:submit|preventDefault={handleLogin} class="flex gap-3 flex-col">
                <label for="emailL">Email:</label>
                <input type="email" id="emailL" class="w-full text-p-black p-1 rounded-lg" bind:value={email} required>
        
                <label for="passwordL">Password:</label>
                <input type="password" id="passwordL" class="w-full text-p-black" bind:value={password} required>
        
                <button type="submit" class="bg-p-blue text-p-black p-3 w-full rounded-lg">Login</button>
            </form>
        </Tabs.Content>
        <Tabs.Content value="register" class="pt-3 h-60">
            <form on:submit|preventDefault={handleRegister} class="flex gap-3 flex-col">
                <label for="email">Email:</label>
                <input type="email" id="email" class="w-full text-p-black" bind:value={email} required />
        
                <label for="password">Password:</label>
                <input type="password" id="password" class="w-full text-p-black" bind:value={password} required />
        
                <button type="submit" class="bg-p-blue text-p-black p-3 w-full rounded-lg">Register</button>
            </form>
        </Tabs.Content>
    </Tabs.Root>
</main>
