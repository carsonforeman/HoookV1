<script>
    import { writable } from 'svelte/store';
    import { login } from '../stores/authStore';
    import ProtectedRoute from '../components/ProtectedRoute.svelte'; // Adjust path as necessary
    

    let email = '';
    let password = '';
    let message = writable('');
    let isSubmitting = writable(false);

    const handleSignIn = async (e) => {
        e.preventDefault();
        isSubmitting.set(true);

        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Login successful');
                message.set('Login successful');
                login(data.user); // Update auth state with user data
                localStorage.setItem('token', data.token); // Store the token
                // Allow time for header to update before redirecting
                setTimeout(() => {
                    window.location.href = '/';
                }, 500); // Adjust the timeout as needed
            } else {
                console.log('Login error:', data);
                message.set(data.error);
            }
        } catch (error) {
            console.error('Error during login request:', error);
            message.set('An unexpected error occurred');
        } finally {
            isSubmitting.set(false);
        }
    };
</script>

<ProtectedRoute redirectPath="/">
    <main>
        <div class="container">
            <div class="left-side">
                <img src="images/round_logo.png" alt="Hoook Logo" class="landing-logo">
                <h2>Sign In</h2>
                <form on:submit={handleSignIn}>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" bind:value={email} required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" bind:value={password} required>
                    </div>
                    <button type="submit" class="btn btn-primary" disabled={$isSubmitting}>Sign In</button>
                </form>
                <a href="/sign-up" class="create-account-link">Create Account</a>
                <p>{$message}</p>
            </div>
        </div>
    </main>
</ProtectedRoute>
<style>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: white; /* Changed background color to white */
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        padding: 20px;
        width: 90%;
        max-width: 400px;
        margin: auto;
    }

    .left-side {
        text-align: center;
    }

    .landing-logo {
        max-width: 100px;
        margin-top: -50px; 
        margin-bottom: 50px;
    }

    h2 {
        margin-bottom: 20px;
    }

    .form-group {
        margin-bottom: 15px;
    }

    label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
        text-align: left;
    }

    input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1em;
    }

    .btn-primary {
        width: 100%;
        padding: 10px;
        margin-top: 10px;
        font-size: 1em;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        background-color: #0000CD;
        color: white;
    }

    .gsi-material-button {
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        -webkit-appearance: none;
        background-color: white;
        background-image: none;
        border: 1px solid #747775;
        -webkit-border-radius: 4px;
        border-radius: 4px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #1f1f1f;
        cursor: pointer;
        font-family: 'Roboto', arial, sans-serif;
        font-size: 14px;
        height: 40px;
        letter-spacing: 0.25px;
        outline: none;
        overflow: hidden;
        padding: 0 12px;
        position: relative;
        text-align: center;
        -webkit-transition: background-color .218s, border-color .218s, box-shadow .218s;
        transition: background-color .218s, border-color .218s, box-shadow .218s;
        vertical-align: middle;
        white-space: nowrap;
        width: 100%;
        max-width: 400px;
        margin-top: 10px;
    }

    .gsi-material-button .gsi-material-button-icon {
        height: 20px;
        margin-right: 12px;
        min-width: 20px;
        width: 20px;
    }

    .gsi-material-button .gsi-material-button-content-wrapper {
        -webkit-align-items: center;
        align-items: center;
        display: flex;
        -webkit-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: nowrap;
        flex-wrap: nowrap;
        height: 100%;
        justify-content: space-between;
        position: relative;
        width: 100%;
    }

    .gsi-material-button .gsi-material-button-contents {
        -webkit-flex-grow: 1;
        flex-grow: 1;
        font-family: 'Roboto', arial, sans-serif;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: top;
    }

    .gsi-material-button .gsi-material-button-state {
        -webkit-transition: opacity .218s;
        transition: opacity .218s;
        bottom: 0;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        top: 0;
    }

    .gsi-material-button:disabled {
        cursor: default;
        background-color: #ffffff61;
        border-color: #1f1f1f1f;
    }

    .gsi-material-button:disabled .gsi-material-button-contents {
        opacity: 38%;
    }

    .gsi-material-button:disabled .gsi-material-button-icon {
        opacity: 38%;
    }

    .gsi-material-button:not(:disabled):active .gsi-material-button-state, 
    .gsi-material-button:not(:disabled):focus .gsi-material-button-state {
        background-color: #303030;
        opacity: 12%;
    }

    .gsi-material-button:not(:disabled):hover {
        -webkit-box-shadow: 0 1px 2px 0 rgba(60, 64, 67, .30), 0 1px 3px 1px rgba(60, 64, 67, .15);
        box-shadow: 0 1px 2px 0 rgba(60, 64, 67, .30), 0 1px 3px 1px rgba(60, 64, 67, .15);
    }

    .gsi-material-button:not(:disabled):hover .gsi-material-button-state {
        background-color: #303030;
        opacity: 8%;
    }

    .create-account-link {
        display: block;
        margin-top: 15px;
        font-size: 0.9em;
        color: #007bff;
        text-decoration: none;
    }

    .create-account-link:hover {
        text-decoration: underline;
    }
</style>
