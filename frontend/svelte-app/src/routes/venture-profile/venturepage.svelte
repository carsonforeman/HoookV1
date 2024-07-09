<script>
    import { Router, Link, Route } from '@roxi/routify';
    import Overview from './overview.svelte';
  
    let ventureName = 'Venture Name';
    let ventureDescription = 'This is the description of the venture.';
    let activeSection = 'overview';
  
    function setActiveSection(section) {
      activeSection = section;
    }
  
    $: $page.url && ($page.url.includes('team') ? activeSection = 'team' : 
                      $page.url.includes('repository') ? activeSection = 'repository' :
                      $page.url.includes('resources') ? activeSection = 'resources' : activeSection = 'overview');
  </script>
  
  <style>
    .menu {
      display: flex;
      gap: 20px;
      margin-top: 20px;
    }
    .menu a {
      text-decoration: none;
      color: black;
    }
    .menu a.active {
      color: blue;
      text-decoration: underline;
    }
    .header {
      text-align: center;
      margin: 20px 0;
    }
    .logo {
      width: 100px;
      height: auto;
    }
  </style>
   <main>
  <div class="header">
    <img src="/images/hoook_landing_logo.png" alt="Venture Logo" class="logo" />
    <h1>{ventureName}</h1>
    <p>{ventureDescription}</p>
  </div>
  
  <div class="menu">
    <Link to="/venture-profile/venturepage/overview" class={activeSection === 'overview' ? 'active' : ''} on:click={() => setActiveSection('overview')}>Overview</Link>
    <Link to="/venture-profile/venturepage/team" class={activeSection === 'team' ? 'active' : ''} on:click={() => setActiveSection('team')}>Team</Link>
    <Link to="/venture-profile/venturepage/repository" class={activeSection === 'repository' ? 'active' : ''} on:click={() => setActiveSection('repository')}>Repository</Link>
    <Link to="/venture-profile/venturepage/resources" class={activeSection === 'resources' ? 'active' : ''} on:click={() => setActiveSection('resources')}>Resources</Link>
  </div>
  
  <Router>
    <Route path="/venture-profile/venturepage/overview" component={Overview} />
    <Route path="/venture-profile/venturepage/team" component={import('./team.svelte')} />
    <Route path="/venture-profile/venturepage/repository" component={import('./repository.svelte')} />
    <Route path="/venture-profile/venturepage/resources" component={import('./resources.svelte')} />
    <Route path="/*" component={Overview} /> <!-- Default route to show overview -->
  </Router>
 </main>