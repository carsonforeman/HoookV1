<script>

</script>

<main>
 <!-- new-venture.svelte -->

<div class="container mt-5">
    <h1 class="mb-4">Create a New Venture Profile</h1>

    <!-- Short list of reasons to create a venture profile -->
    <div class="mb-4">
        <h3>Why Create a Venture Profile on Hoook?</h3>
        <ul>
            <li>Reason 1</li>
            <li>Reason 2</li>
            <li>Reason 3</li>
            <!-- Add more reasons as needed -->
        </ul>
    </div>

    <!-- Venture profile form -->
    <form>
        <div class="mb-3">
            <label for="ventureName" class="form-label">Venture Name</label>
            <input type="text" class="form-control" id="ventureName" placeholder="Enter venture name">
        </div>

        <div class="mb-3">
            <label for="ventureDescription" class="form-label">Venture Description</label>
            <textarea class="form-control" id="ventureDescription" rows="3" placeholder="Enter venture description"></textarea>
        </div>

        <div class="mb-3">
            <label for="ventureLocation" class="form-label">Venture Location</label>
            <input type="text" class="form-control" id="ventureLocation" placeholder="Enter venture location">
        </div>

        <div class="mb-3">
            <label for="ventureStage" class="form-label">Venture Stage</label>
            <input type="text" class="form-control" id="ventureStage" placeholder="Enter venture stage">
        </div>

        <div class="mb-3">
            <label for="ventureResources" class="form-label">Venture Resources</label>
            <input type="text" class="form-control" id="ventureResources" placeholder="Enter venture resources">
        </div>

        <div class="mb-3">
            <label for="ventureLogo" class="form-label">Venture Logo</label>
            <input type="file" class="form-control" id="ventureLogo">
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>

<style>
    /* Add any additional styles here */
</style>

</main>