<script>
    import { fly } from "svelte/transition";
    import { push } from "svelte-spa-router"
    import { onMount, onDestroy } from 'svelte';
    import { readDir } from "./helper/read.js";
    import { secret } from './helper/stores.js';

	let secretValue;

	secret.subscribe(value => {
		secretValue = value;
	});

    let files= [];
    let value = 0;
    let html = "";

    const lr = "LR.html";
 
    onMount( async () => {
        files = await readDir();
    });
    onDestroy( async () => await secret.set(false));

    const goto = (e) => {
        e.preventDefault();
        value = e.currentTarget.value;
        console.log(value);
        push(`/writing/${value}` /*,{ state: {id: value}}, */);
    }
</script>
<style>
    .writing{
        width: 70%;
        text-align: left;
        height: max-content;
        border-style: solid;
        border-width: thin;
        min-width: 400px;
        margin: 10px;
        background-color: white;
        border-radius: 8px;
        padding: 10px 10px;
    }
    .disclaimer {
        width: 100%;
        text-align: left;




        margin: 10px;


        padding: 10px 10px;
    }
    .smallbox {
        display: flex;
        justify-content: space-between;
    }
    .largebox {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
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
        <li class="disclaimer" in:fly="{{delay: 500 , x: 500, duration: 1000}}" out:fly="{{delay:  100, x: -400, duration: 1000 }}">
            All following writings are for personal enjoyment and no particular professional purposes...
        </li>
        {#each files as file (file.id)}
            <li class="writing" value={file.id} on:keyup on:click={goto} in:fly="{{delay: 500 + file.id * 100, x: 500, duration: 1000}}" out:fly="{{delay: file.id * 100, x: -400, duration: 1000 }}">
                <div class="largebox">
                    <div class="smallbox">
                        <span>
                            {file.name} 
                        </span>
        
                        <span>
                            Published {file.date}
                        </span>
                    </div>
                    <div>
                        <hr>
                    </div>

                    <div class="smallbox">
                        <span>
                            Tags: {file.tags}
                        </span>
                        <span>
                        {file.wordCount} words
                        </span>
                    </div>
                </div>
            </li>
        {/each}
    </ul>
    {#if secretValue == true}
    <ul>
        <li class="writing" value="a"
        in:fly="{{ delay:  700 + (files.length + 1) * 100, x: 500, duration: 1000}}"
        out:fly="{{delay: (files.length + 1) * 100, x: -400, duration: 1000 }}"
         on:keyup  on:click={goto}>
            <div class="smallbox">
                <span>
                    Lycoris Recoil Fanfic
                </span>

            </div>
        </li>

    </ul>
    {/if}
</div>