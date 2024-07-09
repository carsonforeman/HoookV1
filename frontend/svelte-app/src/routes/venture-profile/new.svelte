<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    let ventureName = '';
    let ventureDescription = '';
    let ventureCategory = '';
    let ventureSpecifics = '';
    let ventureStage = '';
    let ventureResources = [];
    let ventureLocation = '';
    let venturePrivacy = 'public';
    let step = 1;
    let message = writable('');

    const categories = [
        { value: 'creative-venture', displayLabel: 'Creative Venture (e.g., music album, art project, novel)', selectedLabel: 'Creative Venture' },
        { value: 'digital-product', displayLabel: 'Digital Product (e.g., software app, website, SaaS)', selectedLabel: 'Digital Product' },
        { value: 'physical-product', displayLabel: 'Physical Product (e.g., consumer electronics, handmade crafts, boardgame)', selectedLabel: 'Physical Product' },
        { value: 'service-business', displayLabel: 'Service Business (e.g., consulting, landscaping, personal training)', selectedLabel: 'Service Business' },
        { value: 'social-impact', displayLabel: 'Social Impact (e.g., non-profit, social enterprise, community project)', selectedLabel: 'Social Impact' },
        { value: 'retail-business', displayLabel: 'Retail Business (e.g., e-commerce store, boutique, restaurant)', selectedLabel: 'Retail Business' },
        { value: 'content-creation', displayLabel: 'Content Creation (e.g., YouTube or TikTok channel, blog, podcast)', selectedLabel: 'Content Creation' },
        { value: 'hybrid-other', displayLabel: 'Hybrid/Other (e.g., ventures combining multiple elements or unique ideas)', selectedLabel: 'Hybrid/Other' }
    ];

    const stages = [
    { value: 'ideation', displayLabel: 'Ideation - Brainstorming and conceptualizing your venture', selectedLabel: 'Ideation' },
    { value: 'research-planning', displayLabel: 'Research and Planning - Conducting research and creating a plan', selectedLabel: 'Research and Planning' },
    { value: 'development', displayLabel: 'Development - Building and developing your product or service', selectedLabel: 'Development' },
    { value: 'launch', displayLabel: 'Launch - Releasing your product or service to the market', selectedLabel: 'Launch' },
    { value: 'growth', displayLabel: 'Growth - Expanding your venture and increasing your market presence', selectedLabel: 'Growth' },
    { value: 'maturity', displayLabel: 'Maturity - Establishing a stable and sustainable business', selectedLabel: 'Maturity' }
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

    async function createVenture() {
        console.log('Creating venture with:', { ventureName, ventureDescription, ventureCategory, ventureSpecifics, ventureStage, ventureResources, ventureLocation, venturePrivacy });

        try {
            const response = await fetch('http://localhost:3000/api/ventures', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    ventureName,
                    ventureDescription,
                    ventureCategory,
                    ventureSpecifics,
                    ventureStage,
                    ventureResources,
                    ventureLocation,
                    venturePrivacy
                })
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Venture creation successful:', data);
                message.set('Venture created successfully!');
                window.location.href = '/myhub'; 
            } else {
                console.error('Venture creation error:', data);
                message.set(data.error);
            }
        } catch (error) {
            console.error('Error during venture creation request:', error);
            message.set('An unexpected error occurred');
        }
    }

    function nextStep() {
        if (step === 1 && ventureName && ventureDescription) step += 1;
        else if (step === 2 && ventureCategory && ventureSpecifics) step += 1;
        else if (step === 3 && ventureStage) step += 1;
        else if (step === 4 && ventureResources.length > 0) step += 1;
        else if (step === 5 && ventureLocation && venturePrivacy) step += 1;
    }

    function previousStep() {
        if (step > 1) step -= 1;
    }

    function toggleResource(resource) {
        if (ventureResources.includes(resource)) {
            ventureResources = ventureResources.filter(r => r !== resource);
        } else {
            ventureResources = [...ventureResources, resource];
        }
    }
</script>

<main>
    <div class="logo-container">
        <img src="/images/round_logo.png" alt="Hoook Logo" class="logo">
    </div>
    <div class="container">
        {#if step === 1}
            <h1>Start by naming your venture profile and providing a brief description.</h1>
        {/if}
        {#if step === 2}
            <h1>Select the category that best fits your venture and specify the type of venture.</h1>
        {/if}
        {#if step === 3}
            <h1>Which stage best describes your current primary focus?</h1>
        {/if}
        {#if step === 4}
            <h1>What resources do you currently need to advance your venture?</h1>
        {/if}
        {#if step === 5}
            <h1>Final Details</h1>
        {/if}
        <form on:submit|preventDefault={createVenture}>
            {#if step === 1}
                <div class="form-group">
                    <label for="ventureName">Venture Name</label>
                    <input type="text" id="ventureName" bind:value={ventureName} placeholder="Choose a name for your venture" required>
                </div>

                <div class="form-group">
                    <label for="ventureDescription">Venture Description</label>
                    <textarea id="ventureDescription" bind:value={ventureDescription} placeholder="Write 1-2 sentences describing what your venture is or does." required></textarea>
                </div>
            {/if}

            {#if step === 2}
                <div class="form-group">
                    <label for="ventureCategory">Venture Category</label>
                    <select id="ventureCategory" bind:value={ventureCategory} required>
                        <option value="" disabled selected>Select a category</option>
                        {#each categories as category}
                            <option value={category.value}>{ventureCategory === category.value ? category.selectedLabel : category.displayLabel}</option>
                        {/each}
                    </select>
                </div>

                <div class="form-group">
                    <label for="ventureSpecifics">Type of Venture</label>
                    <input type="text" id="ventureSpecifics" bind:value={ventureSpecifics} placeholder="What exactly is your venture? (tech startup, food truck, board game etc.)" required>
                </div>
            {/if}

            {#if step === 3}
                <div class="form-group">
                    <label for="ventureStage">Venture Stage</label>
                    <select id="ventureStage" bind:value={ventureStage} required>
                        <option value="" disabled selected>What stage are you currently in?</option>
                        {#each stages as stage}
                            <option value={stage.value}>{ventureStage === stage.value ? stage.selectedLabel : stage.displayLabel}</option>
                        {/each}
                    </select>
                </div>
            {/if}

            {#if step === 4}
                <div class="form-group">
                    <label for="ventureResources">Venture Resources Needed</label>
                    <div class="dropdown">
                        <button class="dropdown-toggle" type="button">
                            Select Resources
                        </button>
                        <div class="dropdown-menu">
                            {#each resources as resource}
                                <div class="checkbox-group">
                                    <input type="checkbox" id={resource.value} value={resource.value} checked={ventureResources.includes(resource.value)} on:change={() => toggleResource(resource.value)}>
                                    <label for={resource.value}>{resource.label}</label>
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
            {/if}

            {#if step === 5}
                <div class="form-group">
                    <label for="ventureLocation">Venture Location</label>
                    <select id="ventureLocation" bind:value={ventureLocation} required>
                        <option value="" disabled selected>Select a location</option>
                        {#each locations as location}
                            <option value={location.value}>{location.label}</option>
                        {/each}
                    </select>
                </div>

                <div class="form-group">
                    <label for="venturePrivacy">Venture Privacy</label>
                    <select id="venturePrivacy" bind:value={venturePrivacy} required>
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </select>
                </div>
            {/if}

            <div class="button-group">
                {#if step > 1}
                    <button type="button" class="btn btn-secondary" on:click={previousStep}>Previous</button>
                {/if}
                {#if step < 5}
                    <button type="button" class="btn btn-primary next-btn" on:click={nextStep} disabled={(step === 1 && (!ventureName || !ventureDescription)) || (step === 2 && (!ventureCategory || !ventureSpecifics)) || (step === 3 && !ventureStage) || (step === 4 && ventureResources.length === 0)}>Next</button>
                {/if}
                {#if step === 5}
                    <button type="submit" class="btn btn-primary">Create Venture Profile</button>
                {/if}
            </div>
        </form>
        <p>{$message}</p>
    </div>
</main>

<style>
    main {
        background-color: white; /* Changed background to white */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        padding: 20px;
        box-sizing: border-box;
    }

    .logo-container {
        text-align: center;
        margin-top: 20px; /* Add top margin */
    }

    .logo {
        max-width: 100px;
        margin-bottom: 10px; /* Reduce margin between logo and h1 */
    }

    .container {
        background-color: white;
        padding: 20px;
        width: 100%;
        max-width: 600px;
        text-align: left;
        min-height: 500px; /* Add a minimum height */
        display: flex;
        flex-direction: column;
        justify-content: space-between; /* Ensure even spacing */
    }

    h1 {
        font-size: 1.8em;
        color: #333;
        text-align: center;
    }

    .form-group {
        margin-bottom: 20px;
    }

    .form-group label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
        color: #333;
    }

    .form-group input[type="text"],
    .form-group textarea,
    .form-group select {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1em;
        box-sizing: border-box;
    }

    .form-group textarea {
        resize: vertical;
        height: 100px;
    }

    .form-group select {
        cursor: pointer;
    }

    .checkbox-group {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .checkbox-group input[type="checkbox"] {
        margin-right: 10px;
    }

    .button-group {
        display: flex;
        justify-content: space-between;
    }

    .btn {
        padding: 10px 20px;
        font-size: 1em;
        border-radius: 5px;
        cursor: pointer;
    }

    .btn-primary {
        background-color: #007bff;
        color: white;
        border: none;
    }

    .btn-primary:hover {
        background-color: #0056b3;
    }

    .btn-secondary {
        background-color: #6c757d;
        color: white;
        border: none;
    }

    .btn-secondary:hover {
        background-color: #5a6268;
    }

    .btn:disabled {
        background-color: #c0c0c0;
        cursor: not-allowed;
    }

    .next-btn {
        margin-left: auto;
    }

    .tooltip-container {
        display: flex;
        align-items: center;
    }

    .tooltip-container i {
        margin-left: 5px;
        color: #007bff;
        cursor: pointer;
    }

    .dropdown {
        position: relative;
        display: inline-block;
        width: 100%;
    }

    .dropdown-toggle {
        width: 100%;
        padding: 10px;
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

    .dropdown:hover .dropdown-menu {
        display: block;
    }

    .info-icon {
        margin-left: 10px;
        font-size: 0.8em;
        cursor: pointer;
    }
</style>

