<script>
    import { fly } from "svelte/transition";
    import { navigate} from "svelte-routing"
    import { onMount } from 'svelte';
    import { readDir } from "./helper/read.js";
    export let secret = false;
    let files= [];
    let value = 0;
    let html = "";
    const lr = "LR.html";
 
    onMount( async () => {
        files = await readDir();
 
    });

    const goto = (e) => {
        e.preventDefault();
        value = e.currentTarget.value;
        console.log(value)
        navigate(`/writings/${value}`, { replace: true, state: {id: value} }, );
    }
</script>
<style>
    .writing{
        width: 70%;
        text-align: left;
        height: 50px;
        border-style: solid;
        border-width: thin;
        min-width: 300px;
        margin: 10px;
        background-color: white;
        border-radius: 8px;
        padding: 0px 10px;
    }
    .smallbox {
        display: flex;
        justify-content: space-between;
    }
    .writing:hover{
        background-color: #C0C0C0; 
        cursor: pointer;
    }
    ul {
        list-style-type: none; /* Remove bullets */
        padding: 0; /* Remove padding */
        margin: 0; /* Remove margins */
    }
</style>


<div>
    <ul>
        {#each files as file (file.id)}
            <li class="writing" value={file.id} on:keyup on:click={goto}>
                <div class="smallbox">
                    <span>
                        {file.name} 
                    </span>
    
                    <span>
                        {file.date}
                    </span>
                 </div>

                <div>
                    Word Count: {file.wordCount}
                </div>
            </li>
        {/each}
    </ul>
    {#if secret == true}
    <ul>
        <li class="writing" value="a"
        in:fly="{{ x: 500, duration: 1000}}" on:keyup  on:click={goto}>
            <div class="smallbox">
                <span>
                    Lycoris Recoil Fanfic
                </span>

            </div>
        </li>

    </ul>
    {/if}
</div>