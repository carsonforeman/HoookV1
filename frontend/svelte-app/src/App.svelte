<script context="module">
    import { Router, createRouter } from '@roxi/routify';
    import routes from '../.routify/routes.default.js';
    export const router = createRouter({ routes });
</script>

<script>
    import { onMount } from 'svelte';
    import Header from './components/header.svelte';
    import { checkAuth } from './stores/authStore';

    onMount(() => {
        checkAuth();
    });
</script>

<main>
    <Header />
    <Router {router} />
</main>

<style>
    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
