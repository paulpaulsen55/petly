<script>
    import Footer from "$lib/components/Footer.svelte";
import Navigation from "$lib/components/Navigation.svelte";
    import "../app.css";
</script>

<div class="bg-p-black text-p-white sm:px-16 overflow-hidden">
    <Navigation />
    <slot />
    <Footer />
</div>
