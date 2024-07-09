<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    // Writable stores for user profile and ventures
    const userProfile = writable({
        profilePicture: 'images/profile_place.png',
        name: '',
        email: '',
        bio: '',
        socialLinks: [],
        location: ''
    });

    const userVentures = writable([]);
    const error = writable('');

    // Fetch user profile data
    async function fetchUserProfile() {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:3000/api/users/profile', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user profile');
            }

            const data = await response.json();
            userProfile.set(data);
        } catch (err) {
            error.set(err.message);
        }
    }

    // Fetch user ventures data
    async function fetchUserVentures() {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:3000/api/ventures', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user ventures');
            }

            const data = await response.json();
            userVentures.set(data);
        } catch (err) {
            error.set(err.message);
        }
    }

    // On mount, fetch user profile and ventures
    onMount(() => {
        fetchUserProfile();
        fetchUserVentures();
    });
</script>

<main>
    <div class="dashboard">
        <!-- Profile Section -->
        <section class="profile">
            <h2>My Profile</h2>
            <div class="profile-details">
                <img src="{$userProfile.profilePicture}" alt="Profile Picture" class="profile-pic">
                <p><strong>Name:</strong> {$userProfile.name}</p>
                <p><strong>Email:</strong> {$userProfile.email}</p>
                <p><strong>Bio:</strong> {#if $userProfile.bio}{$userProfile.bio}{:else}Add your bio...{/if}</p>
                <div class="social-links">
                    <strong>Social Links:</strong>
                    <ul>
                        {#if $userProfile.socialLinks.length}
                            {#each $userProfile.socialLinks as link}
                                <li><a href={link.url} target="_blank">{link.platform}</a></li>
                            {/each}
                        {:else}
                            <li>Add your social links...</li>
                        {/if}
                    </ul>
                </div>
                <p><strong>Location:</strong> {#if $userProfile.location}{$userProfile.location}{:else}Add your location...{/if}</p>
            </div>
        </section>

        <!-- My Ventures Section -->
        <section class="my-ventures">
            <h2>My Ventures</h2>
            <div class="venture-list">
                {#if $error}
                    <p class="error">{$error}</p>
                {:else}
                    {#each $userVentures as venture}
                        <div class="venture" key={venture.id}>
                            <h3>{venture.name}</h3>
                            <p>{venture.description}</p>
                        </div>
                    {/each}
                {/if}
            </div>
        </section>

        <!-- Notifications Section -->
        <section class="notifications">
            <h2>Notifications</h2>
            <p>Notifications will be displayed here.</p>
        </section>
    </div>
</main>

<style>
    main {
        padding-top: 100px; /* Add padding to prevent content from being hidden behind the header */
    }

    .dashboard {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f4f4f9;
        border-radius: 8px;
    }

    section {
        background-color: white;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h2 {
        margin-top: 0;
    }

    .profile-details {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .profile-pic {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        cursor: pointer;
    }

    .venture-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .venture {
        background-color: #e9ecef;
        padding: 10px;
        border-radius: 4px;
    }

    .error {
        color: red;
    }
</style>
