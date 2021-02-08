<div class="container">
  <h2>Posts</h2>
</div>
<style>
  .container {
  }
</style>
<script context='module' lang='ts'>
  import type {Preload, Page, PreloadContext} from '@sapper/common'

  export const preload: Preload = async function (this: PreloadContext, page: Page, session) {

    this.redirect(307, '/admin/login?next=posts')

    return {}
  }
</script>
<script lang='ts'>
  // silence is golden
</script>
