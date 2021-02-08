<svelte:head>
    <title>monggolean</title>
</svelte:head>
<Navigation/>
<div class='application--container'>
    <slot></slot>
</div>

<script lang="ts">
    import Navigation from '../components/navigation.svelte'
</script>
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
        font-family: raleway, sans-serif;
        margin: 0;
    }

    .application--container {
        overflow-y: scroll;
    }
</style>
