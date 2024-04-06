<script>
    import Footer from "$lib/components/Footer.svelte";
import Navigation from "$lib/components/Navigation.svelte";
    import "../app.css";
</script>

<div class="sm:px-16 overflow-hidden min-h-screen">
    <Navigation />
    <slot />
    <Footer />
</div>
