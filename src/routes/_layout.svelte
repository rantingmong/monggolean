{#if notAdmin}
<Navigation/>
<div class='application--container'>
    <slot/>
</div>
{:else}
<NavigationAdmin/>
<div class='application--container'>
    <slot/>
</div>
{/if}

<script lang="ts">
    import Navigation       from '../components/navigation.svelte'
    import NavigationAdmin  from '../components/navigation-admin.svelte'

    export let segment

    $: notAdmin = segment != 'admin'

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
        position: relative;
    }

    .application--container > :global(div) {
        padding: 25pt;
    }

</style>
