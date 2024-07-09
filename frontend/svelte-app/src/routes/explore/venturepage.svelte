<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    let ventureDetails = writable(null);

    onMount(async () => {
        const data = {
            name: 'Tech Innovators',
            description: 'A platform for innovative tech solutions.',
            stage: 'Ideation',
            location: 'Online',
            category: 'Business Venture',
            logo: 'images/hoook_landing_logo.png" alt="Hoook Logo" class="landing-logo',
            ownerImage: 'images/carsonforeman.png',
            ownerName: 'Carson Foreman',
            resources: ['Capital', 'Feedback', 'Mentors'],
            moreDetails: 'Additional details about the venture, its goals, progress, team, and more.'
        };
        ventureDetails.set(data);
    });
</script>

<main>
    {#if $ventureDetails}
        <div class="venture-header">
            <img src={$ventureDetails.logo} alt="{$ventureDetails.name} Logo" class="venture-logo">
            <h1>{$ventureDetails.name}</h1>
        </div>
        <div class="venture-details">
            <p>{$ventureDetails.description}</p>
            <p><strong>Stage:</strong> {$ventureDetails.stage}</p>
            <p><strong>Location:</strong> {$ventureDetails.location}</p>
            <p><strong>Category:</strong> {$ventureDetails.category}</p>
            <p>{$ventureDetails.moreDetails}</p>
        </div>
        <div class="venture-resources">
            <strong>Resources Needed:</strong>
            <div class="resource-list">
                {#each $ventureDetails.resources as resource}
                    <span class="resource">{resource}</span>
                {/each}
            </div>
        </div>
        <nav class="menu">
            <a href="#overview">Overview</a>
            <a href="#team">Team</a>
            <a href="#repository">Repository</a>
            <a href="#resources">Resources</a>
            <a href="#settings">Settings</a>
        </nav>
    {/if}
</main>

<style>
    main {
        padding: 20px;
        background-color: #f9f9f9;
        max-width: 100%;
        margin: 0 auto;

    }

    .venture-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        width: 100%;
        margin-top: 100px;
    }

    .venture-logo {
        width: 150px;
        height: auto;
    }

    h1 {
        font-size: 2em;
        margin-left: 20px;
    }

    .venture-details p {
        font-size: 1.1em;
        margin: 10px 0;
        width: 100%;
    }

    .venture-resources {
        margin: 20px 0;
        width: 100%;
    }

    .resource-list {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        width: 100%;
    }

    .resource {
        background-color: #e0e0e0;
        padding: 5px 10px;
        border-radius: 20px;
        font-size: 0.9em;
        color: #333;
    }

    .menu {
        display: flex;
        justify-content: space-around;
        background-color: #007bff;
        padding: 10px;
        width: 100%;
        margin-top: 20px;
    }

    .menu a {
        color: white;
        text-decoration: none;
        font-size: 1em;
        padding: 10px 20px;
    }

    .menu a:hover {
        background-color: #0056b3;
        border-radius: 5px;
    }

    .menu a.active {
        color: blue;
        text-decoration: underline;
    }
</style>
