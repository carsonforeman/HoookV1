<script>
    import Header from '../components/header.svelte'; // Adjusted import path

    let posts = [
        {
            id: 1,
            author: 'John Doe',
            content: 'This is the first post in the feed.',
            timestamp: new Date().toLocaleString()
        },
        {
            id: 2,
            author: 'Jane Smith',
            content: 'Loving the new platform!',
            timestamp: new Date().toLocaleString()
        }
    ];

    let newPostContent = '';

    function createPost() {
        if (newPostContent.trim() !== '') {
            const newPost = {
                id: posts.length + 1,
                author: 'Current User',
                content: newPostContent,
                timestamp: new Date().toLocaleString()
            };
            posts = [newPost, ...posts];
            newPostContent = '';
        }
    }
</script>

<main>
    <Header />
    <div class="content">
        <div class="create-post">
            <textarea bind:value={newPostContent} placeholder="What's on your mind?" rows="3"></textarea>
            <button on:click={createPost}>Post</button>
        </div>
        <div class="feed">
            {#each posts as post}
                <div class="post" key={post.id}>
                    <div class="post-header">
                        <span class="author">{post.author}</span>
                        <span class="timestamp">{post.timestamp}</span>
                    </div>
                    <div class="post-content">
                        {post.content}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</main>

<style>
    main {
        padding-top: 100px; /* Add padding to prevent content from being hidden behind the header */
    }

    .content {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f4f4f9;
        border-radius: 8px;
    }

    .create-post {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        background-color: white;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    textarea {
        resize: none;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1em;
    }

    button {
        align-self: flex-end;
        padding: 10px 20px;
        border: none;
        background-color: #007bff;
        color: white;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }

    .feed {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .post {
        background-color: white;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .post-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .author {
        font-weight: bold;
    }

    .timestamp {
        color: #888;
        font-size: 0.8em;
    }

    .post-content {
        font-size: 1em;
        line-height: 1.4;
    }
</style>
