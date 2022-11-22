<script>

    import { fly, fade } from "svelte/transition";
    import { onMount } from "svelte";
    import { readByID, fread} from "./helper/read";
    import { Router } from "svelte-navigator";
    import { navigate } from "svelte-routing";
    import BackButton from "./buttons/BackButton.svelte";
    export let id;

    let htmlFile;
    let html;
    onMount(async () => {
        html = await readByID(id);
        if ( html === "undefined") {
            alert('Writing Does exist 😲');
            navigate("/", {replace: true});
        }

        //console.log(html);
    })


</script>

<style>
     .text {
    top: 50px;
    padding: 10px 30px 0px 30px;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 0;
    min-height: 700px;
    min-width: 400px;
    height: auto;
    border: 1px solid black;
  }
</style>

<Router>
    <div class="text" in:fly={{y:1000, duration: 2000,delay: 500}} out:fly>
        <div>
           <BackButton/>
        </div>
        {@html html}
    </div>
</Router>
