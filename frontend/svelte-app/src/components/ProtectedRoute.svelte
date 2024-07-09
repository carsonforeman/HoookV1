<script>
    import { isAuthenticated } from '../stores/authStore';
    import { onMount } from 'svelte';

    export let redirectPath = '/';

    let isLoggedIn;

    $: isLoggedIn = $isAuthenticated;

    onMount(() => {
        if (isLoggedIn) {
            window.location.href = redirectPath;
        }
    });
</script>

{#if !isLoggedIn}
    <slot />
{/if}
