<div class="navigation--container">
  <div class="inner">
    <p class="branding">
      <span on:click={() => $pageTab = 0}>monggolean</span>
    </p>
    <div class="navigation--menu">
      <a on:click={() => $pageTab = 1} href="#blogs">Blogs</a>
      <a on:click={() => $pageTab = 2} href="#about">About</a>
      <a on:click={() => $pageTab = 3} href="#contact">Contact</a>
    </div>
  </div>
</div>
<style>
  .navigation--container > .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15pt 25pt 15pt;

    background-color: rgb(20, 60, 100);
  }

  .navigation--container .branding {
    color: white;

    font-size: 20pt;
    font-family: raleway, sans-serif;
    font-weight: 900;

    position: relative;

    user-select: none;
    cursor: default;

    margin: 0;
    padding: 0;
  }
  .navigation--container .branding .caption {
    font-size: 6pt;
    text-transform: uppercase;

    position: absolute;
    left: 0;
    bottom: -12pt;
  }

  .navigation--menu a {
    color: white;
    text-transform: uppercase;
  }
</style>
<script lang="ts">
  import {pageTab, pageLinks} from "../store/navigation"
</script>
