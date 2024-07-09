<script>
    import Header from '../components/header.svelte';
    import Footer from '../components/Footer.svelte';
</script>

<main>
    <Header />

    <div class="content">
        <div class="container text-center">
            <!-- Logo -->
            <div class="row mb-8">
                <div class="col">
                    <img src="images/hoook_landing_logo.png" alt="Hoook Logo" class="landing-logo">
                </div>
            </div>

            <!-- Decision Tree Section -->
            <div class="row decision-tree">
                <a href="/venture-profile/new" class="col-md-5 text-left decision-box">
                    <h2>Create a Venture Profile</h2>
                    <p>Bring your idea to life and attract resources to develop it.</p>
                </a>
                <a href="/explore/ventures" class="col-md-5 text-left decision-box">
                    <h2>Explore Ventures</h2>
                    <p>Discover ventures in development and find opportunities to collaborate.</p>
                </a>
            </div>
        </div>
    </div>
    <Footer />
</main>

<style>
    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .content {
        flex: 1;
        padding-top: 70px; /* Add padding to avoid overlap with fixed header */
        display: flex;
        flex-direction: column;
    }

    .container {
        max-width: 1000px;
        margin: 0 auto;
        flex: 1; /* Ensures the container takes up remaining space */
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .landing-logo {
        max-width: 500px;
        height: auto;
        margin-top: 100px;
    }

    .decision-tree {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        gap: 20px; /* Added gap for spacing */
        margin-top: 125px;
    }

    .decision-box {
        background-color: white;
        border: 2px solid #ddd; /* Light grey border */
        border-radius: 10px;
        padding: 20px;
        text-decoration: none;
        color: inherit;
        transition: border-color 0.3s, box-shadow 0.3s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 150px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        width: 48%; /* Adjusted width for better spacing */
        cursor: pointer;
    }

    .decision-box:hover {
        border-color: #007bff;
        box-shadow: 0 4px 12px rgba(0, 123, 255, 0.2);
    }


    h2 {
        font-size: 2em; /* Increased font size */
        font-weight: bold; /* Bold text */
        margin-bottom: 10px;
        text-align: left; /* Left justified */
    }

    p {
        font-size: 1.2em;
        color: grey; /* Grey text color */
        text-align: left; /* Left justified */
    }

    .container {
        margin-bottom: 100px; /* Adds space below the content */
    }
</style>
