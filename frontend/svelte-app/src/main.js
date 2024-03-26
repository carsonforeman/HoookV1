import App from './App.svelte';
import LandingPage from './pages/LandingPage.svelte'; // Import the LandingPage component

const app = new LandingPage({
    target: document.getElementById('app'), // Update the target to the element with id 'app'
    props: {
        // Any props you want to pass to the LandingPage component
        name: 'world'
    }
});

export default app;
