<svelte:head>
    <title>monggolean | Admin</title>
</svelte:head>
<div class='admin'>
    <h1>Admin page</h1>
</div>
<script context='module' lang='ts'>
    import type {Preload, Page, PreloadContext} from '@sapper/common'

    export const preload: Preload = async function (this: PreloadContext, page: Page, session) {
        this.redirect(307, '/admin/login')
        return {}
    }
</script>
