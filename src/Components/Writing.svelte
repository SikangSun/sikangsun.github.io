<script>

    import { fly } from "svelte/transition";
    import { onMount } from "svelte";
    import { readByID} from "./helper/read";
    import { pop } from "svelte-spa-router";
    import BackButton from "./buttons/BackButton.svelte";
    export let params = {};
    let html = "";
    onMount(async () => {
        html = await readByID(params.id);
        if ( html === "undefined") {
            alert('Writing Does exist 😲');
            pop();
        }

        //console.log(html);
    })


</script>

<style>
    .backButton {
        margin: 10px 0 10px 0;
    }
     .text {
        
    top: 50px;
    padding: 10px 30px 30px 30px;
    margin: 10px 0 70px 0%;
    min-height: 700px;
    min-width: 400px;
    max-width: 600px;
    height: auto;
    border: 1px solid black;
  }
  .container {
    display: flex;
  justify-content: center;
  }
</style>


<div class="container">
    <div class="text" in:fly={{y:1000, duration: 2000}} out:fly={{y:1000, duration: 500}}>
        <div class="backButton">
        <BackButton/>
        </div>
        {@html html}
    </div>
</div>

