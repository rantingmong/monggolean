<div class="login-container">
  {#if showPrompt}
  <strong>You need to login to see this page</strong>
  {:else}
  <strong>Login</strong>
  {/if}
  <form class="card">
    <label>
      Email
      <input type="email">
    </label>
    <label>
      Password
      <input type="password">
    </label>
    <button>Login</button>
  </form>
</div>
<style>
  .login-container {
  }
</style>
<script context='module' lang='ts'>
  import type {Preload, Page, PreloadContext} from '@sapper/common'

  export const preload: Preload = async function (this: PreloadContext, page: Page, session) {

    const {next} = page.query

    return { next }
  }
</script>
<script lang='ts'>
  export let next
  $: showPrompt = next != null

</script>
