<script>
    import { navigate } from "svelte-routing";
  
  </script>
  
  <button title="Go back" on:click={() => navigate("/", {replace: true})}>&lt;-</button>