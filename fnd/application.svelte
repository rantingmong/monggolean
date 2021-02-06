<Navigation/>
<div class="application--container">
  <svelte:component this={tabs[$pageTab]}/>
</div>
<style>
  :global(body) {
    margin: 0;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100%;

    display: grid;
    grid-template-rows: auto 1fr;

    font-family: lato, sans-serif;
  }
  :global(h1, h2, h3, h4, h5) {
    margin: 0;
    font-weight: 700;
    font-family: raleway, sans-serif;
  }

  .application--container {
    overflow-y: scroll;
  }
</style>
<script lang="ts">
  import Navigation   from './parts/navigation'

  import Home         from './pages/home'
  import Blogs        from './pages/blogs'
  import About        from './pages/about'
  import Contact      from './pages/contact'

  import {pageTab}    from "./store/navigation"

  const tabs = [ Home, Blogs, About, Contact ]

</script>
