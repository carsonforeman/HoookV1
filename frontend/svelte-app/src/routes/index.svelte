<!-- LandingPage.svelte -->
<script>
    import Header from '../components/Header.svelte';
</script>

<main>
    <Header />

    <div class="container mt-5">
        <!-- Heading -->
        <div class="row mb-4">
            <div class="col">
                <p class="fw-bold fs-4">Find the venture you are looking for:</p>
            </div>
        </div>

        <!-- Filters -->
        <div class="row mb-3">
            <div class="col">
                <form class="d-flex align-items-center">
                    <div class="mb-2 me-4">
                        <label for="ventureType" class="form-label visually-hidden">Venture Category</label>
                        <select class="form-select" id="ventureType">
                            <option disabled selected value="">Venture Category</option>
                            <!-- Add options here -->
                        </select>
                    </div>

                    <div class="mb-2 me-4">
                        <label for="location" class="form-label visually-hidden">Venture Location</label>
                        <select class="form-select" id="location">
                            <option disabled selected value="">Venture Location</option>
                            <!-- Add options here -->
                        </select>
                    </div>

                    <div class="mb-2 me-4">
                        <label for="stage" class="form-label visually-hidden">Venture Stage</label>
                        <select class="form-select" id="stage">
                            <option disabled selected value="">Venture Stage</option>
                            <!-- Add options here -->
                        </select>
                    </div>

                    <div class="mb-2 me-4">
                        <label for="resources" class="form-label visually-hidden">Venture Resource Needs</label>
                        <select class="form-select" id="resources">
                            <option disabled selected value="">Venture Resource Needs</option>
                            <!-- Add options here -->
                        </select>
                    </div>
                </form>
            </div>
        </div>

        <!-- Search Bar -->
        <div class="row mb-4">
            <div class="col">
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-primary" type="button">Search</button>
                </form>
            </div>
        </div>

        <!-- Venture Cards -->
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            <!-- Repeat this card template for each venture -->
            <div class="col">
                <div class="card" style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                    <div class="rounded-circle mt-3" style="width: 120px; height: 120px; overflow: hidden;">
                        <img src="images/logo.png" class="card-img-top img-fluid" alt="Venture Logo">
                    </div>
                    <div class="card-body text-center">
                        <h5 class="card-title mt-3 fw-bold">Hoook</h5>
                        <p class="card-text">A venture-based social media marketplace for collaboration, discovery, and resource integration.</p>
                        <div class="d-flex justify-content-start flex-wrap mt-2">
                            <span class="badge bg-primary me-1 mb-1">Tech Startup</span>
                            <span class="badge bg-primary me-1 mb-1">Online</span>
                            <span class="badge bg-primary me-1 mb-1">Building and Development</span>
                            <span class="badge bg-primary me-1 mb-1">Money</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End of card template -->
        </div>
    </div>
</main>

<style>
    /* Add any additional styles here */
</style>
