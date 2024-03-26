<!-- Header.svelte -->
<main>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary fixed-top py-0">
        <div class="container-fluid">
            <div class="d-flex align-items-center">
                <a class="navbar-brand" href="/">
                    <img src="images/whitehoook.png" alt="logo" width="150" height="auto" style="margin-left:10px;">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown d-flex align-items-center">
                            <a class="nav-link dropdown-toggle text-white fw-bold fs-5" href="#" id="exploreDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Explore
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="exploreDropdown">
                                <li><a class="dropdown-item" href="/explore/">Ventures</a></li>
                                <li><a class="dropdown-item" href="/explore/">People</a></li>
                            </ul>
                            <!-- No user authentication logic in this example -->
                        </li>
                    </ul>
                </div>
            </div>
            <div class="ms-auto"> <!-- Align remaining elements to the right -->
                <ul class="navbar-nav">
                    <!-- No user authentication logic in this example -->
                    <li class="nav-item">
                        <a class="btn btn-primary text-white fw-bold fs-4" href="/newventure/">New Venture Profile+</a>
                    </li>
                    <li class="nav-item dropdown">
                        <div class="d-flex align-items-center">
                            <a class="nav-link dropdown-toggle text-white fw-bold fs-5" href="#" id="profileDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="images/profile_place.png" class="profile-icon" alt="profile icon" width="30" height="30">
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="profileDropdown">
                                <li><a class="dropdown-item" href="/dashboard/">Profile</a></li>
                                <li><a class="dropdown-item" href="/dashboard/">Account</a></li>
                                <li><a class="dropdown-item" href="/logout/">Sign Out</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</main>

<style>
    /* Add any additional styles here */
</style>
