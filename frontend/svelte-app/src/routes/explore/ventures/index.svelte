<script>
    import { onMount } from 'svelte';
    import VentureProfileCard from '../../../components/VentureProfileCard.svelte';
    import Header from '../../../components/header.svelte'; // Adjusted import path

    let ventures = [];
    let searchQuery = '';
    let stageFilter = '';
    let locationFilter = '';
    let categoryFilter = '';
    let resourceFilter = [];
    let sortOption = '';
    let isResourceDropdownOpen = false;
    let error = '';

    const stages = [
        { value: 'ideation', label: 'Ideation - Brainstorming and conceptualizing your venture' },
        { value: 'research-planning', label: 'Research and Planning - Conducting research and creating a plan' },
        { value: 'development', label: 'Development - Building and developing your product or service' },
        { value: 'launch', label: 'Launch - Releasing your product or service to the market' },
        { value: 'growth', label: 'Growth - Expanding your venture and increasing your market presence' },
        { value: 'maturity', label: 'Maturity - Establishing a stable and sustainable business' }
    ];

    const categories = [
        { value: 'creative-venture', label: 'Creative Venture (e.g., music album, art project, novel)' },
        { value: 'digital-product', label: 'Digital Product (e.g., software app, website, SaaS)' },
        { value: 'physical-product', label: 'Physical Product (e.g., consumer electronics, handmade crafts, boardgame)' },
        { value: 'service-business', label: 'Service Business (e.g., consulting, landscaping, personal training)' },
        { value: 'social-impact', label: 'Social Impact (e.g., non-profit, social enterprise, community project)' },
        { value: 'retail-business', label: 'Retail Business (e.g., e-commerce store, boutique, restaurant)' },
        { value: 'content-creation', label: 'Content Creation (e.g., YouTube or TikTok channel, blog, podcast)' },
        { value: 'hybrid-other', label: 'Hybrid/Other (e.g., ventures combining multiple elements or unique ideas)' }
    ];

    const resources = [
        { value: 'capital', label: 'Capital' },
        { value: 'feedback', label: 'Feedback' },
        { value: 'mentorship', label: 'Mentorship' },
        { value: 'paid-work', label: 'Paid Work' },
        { value: 'equity-partners', label: 'Equity Partners' },
        { value: 'future-equity-agreements', label: 'Future Equity Agreements' },
        { value: 'volunteers', label: 'Volunteers' },
        { value: 'networking', label: 'Networking Opportunities' },
        { value: 'infrastructure', label: 'Infrastructure' }
    ];

    const locations = [
        { value: 'online', label: 'Online' },
        { value: 'nyc', label: 'New York, NY' },
        { value: 'la', label: 'Los Angeles, CA' },
        { value: 'sf', label: 'San Francisco, CA' }
    ];

    const sortOptions = [
        { value: 'newest', label: 'Newest' },
        { value: 'oldest', label: 'Oldest' },
        { value: 'most-popular', label: 'Most Popular' },
        { value: 'least-popular', label: 'Least Popular' }
    ];

    async function fetchVentures() {
        try {
            const response = await fetch('http://localhost:3000/api/ventures/all');
            if (!response.ok) {
                throw new Error('Failed to fetch ventures');
            }
            const data = await response.json();
            ventures = data;
            applyFilters();
        } catch (err) {
            error = err.message;
        }
    }

    function applyFilters() {
        ventures = ventures.filter(venture => {
            return (
                (!searchQuery || venture.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
                (!stageFilter || venture.stage === stageFilter) &&
                (!locationFilter || venture.location === locationFilter) &&
                (!categoryFilter || venture.category === categoryFilter) &&
                (resourceFilter.length === 0 || resourceFilter.some(resource => venture.resources.includes(resource)))
            );
        });

        if (sortOption === 'newest') {
            ventures.sort((a, b) => new Date(b.created) - new Date(a.created));
        } else if (sortOption === 'oldest') {
            ventures.sort((a, b) => new Date(a.created) - new Date(b.created));
        } else if (sortOption === 'most-popular') {
            ventures.sort((a, b) => b.popularity - a.popularity);
        } else if (sortOption === 'least-popular') {
            ventures.sort((a, b) => a.popularity - b.popularity);
        }
    }

    onMount(fetchVentures);

    function updateFilters() {
        applyFilters();
    }

    function toggleResource(resource) {
        if (resourceFilter.includes(resource)) {
            resourceFilter = resourceFilter.filter(r => r !== resource);
        } else {
            resourceFilter = [...resourceFilter, resource];
        }
        applyFilters();
    }

    function toggleResourceDropdown() {
        isResourceDropdownOpen = !isResourceDropdownOpen;
    }

    function closeDropdown(event) {
        if (!event.target.closest('.dropdown')) {
            isResourceDropdownOpen = false;
        }
    }

    document.addEventListener('click', closeDropdown);
</script>

<main>
    <Header />
    <div class="content">
        <div class="header">
            <input type="text" placeholder="Search ventures..." bind:value={searchQuery} on:input={updateFilters}>
            <button on:click={updateFilters}>Search</button>
        </div>

        <div class="filter-sort-section">
            <div class="filters">
                <select id="stageFilter" bind:value={stageFilter} on:change={updateFilters}>
                    <option value="">All Stages</option>
                    {#each stages as stage}
                        <option value={stage.value}>{stage.label}</option>
                    {/each}
                </select>
                <select id="locationFilter" bind:value={locationFilter} on:change={updateFilters}>
                    <option value="">All Locations</option>
                    {#each locations as location}
                        <option value={location.value}>{location.label}</option>
                    {/each}
                </select>
                <select id="categoryFilter" bind:value={categoryFilter} on:change={updateFilters}>
                    <option value="">All Categories</option>
                    {#each categories as category}
                        <option value={category.value}>{category.label}</option>
                    {/each}
                </select>
                <div class="dropdown">
                    <div class="dropdown-toggle" on:click|stopPropagation={toggleResourceDropdown}>
                        {resourceFilter.length > 0 ? resourceFilter.map(r => resources.find(res => res.value === r).label).join(', ') : 'All Resources'}
                    </div>
                    {#if isResourceDropdownOpen}
                        <div class="dropdown-menu">
                            {#each resources as resource}
                                <div class="checkbox-group">
                                    <input type="checkbox" id={resource.value} value={resource.value} checked={resourceFilter.includes(resource.value)} on:change={() => toggleResource(resource.value)}>
                                    <label for={resource.value}>{resource.label}</label>
                                </div>
                            {/each}
                        </div>
                    {/if}
                </div>
                <select id="sortOptions" bind:value={sortOption} on:change={updateFilters}>
                    {#each sortOptions as option}
                        <option value={option.value}>{option.label}</option>
                    {/each}
                </select>
            </div>
        </div>

        {#if error}
            <p>Error: {error}</p>
        {:else}
            <div class="ventures-list">
                {#each ventures as venture}
                    <VentureProfileCard {venture} />
                {/each}
            </div>
        {/if}
    </div>
</main>

<style>
    main {
        padding-top: 100px; /* Add padding to prevent content from being hidden behind the header */
    }

    .content {
        background-color: aliceblue;
        padding: 10px; /* Reduced padding */
        border-radius: 8px;
    }

    .header {
        display: flex;
        align-items: center;
        margin-bottom: 10px; /* Reduced margin */
    }

    input[type="text"] {
        flex-grow: 1;
        padding: 5px; /* Reduced padding */
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1em;
    }

    button {
        padding: 5px 10px; /* Reduced padding */
        border: none;
        background-color: #007bff;
        color: white;
        border-radius: 4px;
        cursor: pointer;
        margin-left: 5px; /* Reduced margin */
    }

    button:hover {
        background-color: #0056b3;
    }

    .filter-sort-section {
        display: flex;
        flex-direction: column;
    }

    .filters {
        display: flex;
        gap: 5px; /* Reduced gap */
        margin-bottom: 10px; /* Reduced margin */
        flex-wrap: wrap; /* Allow filters to wrap */
    }

    select {
        padding: 5px; /* Reduced padding */
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1em;
    }

    .ventures-list {
        display: flex;
        flex-wrap: wrap;
        gap: 10px; /* Reduced gap */
        padding: 10px; /* Add padding for better spacing */
        background-color: white;
    }

    .ventures-list > * {
        flex: 1 1 calc(33.333% - 20px); /* Ensure three ventures per row with proper spacing */
    }

    .dropdown {
        position: relative;
        display: inline-block;
        width: 100%;
    }

    .dropdown-toggle {
        width: 100%;
        padding: 5px; /* Reduced padding */
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: white;
        cursor: pointer;
        font-size: 1em;
    }

    .dropdown-menu {
        display: none;
        position: absolute;
        background-color: white;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        z-index: 1;
        width: 100%;
        padding: 10px;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .dropdown.open .dropdown-menu {
        display: block;
    }

    .checkbox-group {
        display: flex;
        align-items: center;
        margin-bottom: 5px; /* Reduced margin */
    }

    .checkbox-group input[type="checkbox"] {
        margin-right: 5px; /* Reduced margin */
    }
</style>
