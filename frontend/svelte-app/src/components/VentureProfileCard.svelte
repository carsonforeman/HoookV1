<script>
    export let venture;

    function navigateToVentureProfile() {
        const ventureName = venture.name.toLowerCase().replace(/ /g, '-');
        window.location.href = `/venture-profile/${ventureName}`;
    }

    function capitalizeWords(str) {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }
</script>

<div class="venture-card" on:click={navigateToVentureProfile}>
    <div class="logo-container">
        <img src="/images/no_logo.png" alt="{venture.name} Logo" class="venture-logo">
    </div>
    <div class="text-container">
        <div class="name-location">
            <h2>{venture.name}</h2>
            <span class="detail-bubble">
                <img src="/images/location.png" alt="Location">
                {capitalizeWords(venture.location)}
            </span>
        </div>
        <p>{venture.description}</p>
    </div>
    <div class="details-container">
        <div class="detail-item">
            <span class="detail-bubble">
                <img src="/images/category.png" alt="Category">
                {capitalizeWords(venture.category)}
            </span>
            <span class="detail-bubble">
                {capitalizeWords(venture.specifics)}
            </span>
        </div>
        <div class="detail-item">
            <span class="detail-bubble">
                <img src="/images/stage.png" alt="Stage">
                {capitalizeWords(venture.stage)}
            </span>
        </div>
        {#if venture.resources}
            <div class="detail-item resources">
                <div class="resource-list">
                    {#each venture.resources as resource}
                        <span class="resource detail-bubble">
                            <img src="/images/resources.png" alt="Resource">
                            {capitalizeWords(resource)}
                        </span>
                    {/each}
                </div>
            </div>
        {/if}
    </div>
</div>

<style>
    .venture-card {
        display: flex;
        flex-direction: column;
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        width: 30%;
        margin: 10px;
        background-color: white;
        cursor: pointer;
        transition: border-color 0.3s ease;
    }

    .venture-card:hover {
        border-color: lightblue;
    }

    .logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }

    .venture-logo {
        width: 200px;
        height: 200px;
        object-fit: contain;
    }

    .text-container {
        text-align: left;
        padding: 10px;
    }

    .name-location {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .venture-card h2 {
        font-size: 1.5em;
        margin-bottom: 5px;
    }

    .venture-card p {
        font-size: 1em;
        color: #666;
        margin-bottom: 10px;
    }

    .details-container {
        display: flex;
        flex-wrap: wrap;
    }

    .detail-item {
        display: flex;
        align-items: center;
        margin: 5px;
    }

    .detail-bubble {
        background-color: aliceblue;
        padding: 5px 10px;
        border-radius: 20px;
        font-size: 0.9em;
        color: #333;
        display: flex;
        align-items: center;
        margin: 5px;
    }

    .detail-bubble img {
        width: 16px;
        height: 16px;
        margin-right: 5px;
    }

    .resources .resource-list {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        justify-content: flex-start;
    }
</style>
