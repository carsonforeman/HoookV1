<footer class="footer">
    <div class="container">
        <div class="left">
            <a href="/left-link" class="footer-link">Left Link</a>
        </div>
        <div class="middle">
            <span>Together, we can transform ideas into reality and shape the future with Hoook.</span>
        </div>
        <div class="right">
            <a href="/right-link" class="footer-link">Right Link</a>
        </div>
    </div>
</footer>

<style>
    .footer {
        background-color: whitesmoke;
        color: black;
        padding: 10px 0;
        width: 100%;
        box-sizing: border-box; /* Ensure padding does not increase width */
    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 1000px;
        padding: 0 20px;
        margin: 0 auto;
        box-sizing: border-box; /* Ensure padding does not increase width */
    }

    .left, .middle, .right {
        flex: 1;
    }

    .left {
        text-align: left;
    }

    .middle {
        text-align: center;
        white-space: nowrap; /* Prevent wrapping */
    }

    .right {
        text-align: right;
    }

    .footer-link {
        color: black;
        text-decoration: none;
    }

    .footer-link:hover {
        text-decoration: underline;
    }
</style>
