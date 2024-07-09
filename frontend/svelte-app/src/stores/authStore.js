import { writable } from 'svelte/store';

export const isAuthenticated = writable(false);
export const user = writable(null);

export function login(userData) {
    console.log('Logging in user:', userData);
    isAuthenticated.set(true);
    user.set(userData);
}

export function logout() {
    console.log('Logging out');
    isAuthenticated.set(false);
    user.set(null);
    localStorage.removeItem('token');
}

export function checkAuth() {
    const token = localStorage.getItem('token');
    console.log('Checking auth with token:', token);
    if (token) {
        fetch('http://localhost:3000/api/auth/verify-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Token verification response:', data);
            if (data.valid) {
                login(data.user);
            } else {
                logout();
            }
        })
        .catch(error => {
            console.error('Error during token verification:', error);
            logout();
        });
    } else {
        logout();
    }
}
