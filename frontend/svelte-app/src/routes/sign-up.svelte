<script>
    import { writable } from 'svelte/store';
    import ProtectedRoute from '../components/ProtectedRoute.svelte'; // Adjust path as necessary


    let firstName = '';
    let lastName = '';
    let email = '';
    let password = '';
    let confirmPassword = '';
    let message = writable('');
    let isSubmitting = writable(false);

    const handleSignUp = async (e) => {
        e.preventDefault();
        isSubmitting.set(true);

        try {
            const response = await fetch('http://localhost:3000/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstName, lastName, email, password, confirmPassword })
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Signup successful');
                message.set('Signup successful');
                setTimeout(() => {
                    window.location.href = '/sign-in';
                }, 2000); // Adjust the timeout as needed
            } else {
                console.log('Signup error:', data);
                message.set(data.error);
            }
        } catch (error) {
            console.error('Error during signup request:', error);
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
            <h2>Create Account</h2>
            <form on:submit|preventDefault={handleSignUp}>
                <div class="form-row">
                    <div class="form-group">
                        <label for="firstName">First Name</label>
                        <input type="text" id="firstName" bind:value={firstName} placeholder="Enter your first name" required>
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name</label>
                        <input type="text" id="lastName" bind:value={lastName} placeholder="Enter your last name" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" bind:value={email} placeholder="Enter your email" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" bind:value={password} placeholder="Enter your password" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" bind:value={confirmPassword} placeholder="Confirm your password" required>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" disabled={$isSubmitting}>Sign Up</button>
                <a href="/sign-in" class="sign-in-link">Already have an account? Sign in</a>
            </form>
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
        border-radius: 10px;
        padding: 20px;
        width: 90%;
        max-width: 500px;
        margin: auto;
    }

    .left-side {
        text-align: center;
    }

    .landing-logo {
        max-width: 100px;
        margin-bottom: 20px;
    }

    h2 {
        margin-bottom: 20px;
    }

    .form-row {
        display: flex;
        gap: 20px;
        margin-bottom: 15px;
    }

    .form-group {
        flex: 1;
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
        background-color: #007bff;
        color: white;
    }

    .error-message {
        color: red;
        font-size: 0.9em;
        margin-top: 10px;
    }

    .success-message {
        color: green;
        font-size: 0.9em;
        margin-top: 10px;
    }

    .sign-in-link {
        display: block;
        margin-top: 15px;
        font-size: 0.9em;
        color: #007bff;
        text-decoration: none;
    }

    .sign-in-link:hover {
        text-decoration: underline;
    }
</style>
