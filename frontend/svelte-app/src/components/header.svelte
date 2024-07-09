<script>
    import { isAuthenticated, user, logout } from '../stores/authStore';
    let isLoggedIn;
    let currentUser;

    $: isLoggedIn = $isAuthenticated;
    $: currentUser = $user;

    const handleLogout = () => {
        logout();
        window.location.href = '/sign-in';
    };
</script>

{#if isLoggedIn}
<main>
    <nav class="navbar navbar-expand-sm navbar-light bg-white fixed-top py-3">
        <div class="container-fluid">
            <div class="d-flex align-items-center">
                <a href="/myhub">
                    <img src="/images/hoook_landing_logo.png" alt="Logo" class="logo me-3">
                  </a>                  
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-black fw-bold fs-5" href="/explore/ventures">Explore</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-black fw-bold fs-5" href="/feed">Feed</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="ms-auto d-flex align-items-center">
                <button class="custom-btn text-white me-3" on:click={() => window.location.href = '/venture-profile/new'}>New Venture Profile</button>
                <img src="/images/profile_place.png" alt="Profile" class="profile-icon me-2" on:click={handleLogout} tabindex="0" role="button" on:keypress={handleLogout}>
            </div>
        </div>
    </nav>
</main>
{:else}
<main>
    <nav class="navbar navbar-expand-sm navbar-light bg-white fixed-top py-3">
        <div class="container-fluid">
            <div class="d-flex align-items-center">
                <!-- Removed Logo -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-black fw-bold fs-5" href="/what-is-hoook">What is Hoook?</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="ms-auto">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="custom-btn text-white fw-bold fs-4" href="/sign-in">Sign In</a>
                    </li>
                    <li class="nav-item">
                        <div class="d-flex align-items-center">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</main>
{/if}

<style>
    .navbar {
        background-color: white !important;
    }

    .nav-link, .navbar-toggler-icon {
        color: black !important;
    }

    .custom-btn {
        background-color: #0000CD;
        border-color: #0000CD;
        color: white;
        padding: 5px 10px;
        border-radius: 4px;
        cursor: pointer;
        margin-right: 20px;
    }

    .custom-btn:hover {
        background-color: #0056b3;
    }

    .profile-icon {
        border-radius: 50%;
        width: 40px; /* Adjust size as needed */
        height: 40px; /* Adjust size as needed */
    }

    .logo {
        width: 125px; /* Adjust size as needed */
        height: auto;
    }

    .navbar-nav .nav-item {
        padding-top: 10px;
    }

    .navbar-nav {
        margin-left: 50px;
        gap: 25px;
    }
</style>
