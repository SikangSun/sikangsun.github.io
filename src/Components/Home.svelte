<script>
    import { fade, fly } from "svelte/transition";
    import { onMount } from "svelte";
    export let show = true;
    onMount(() => {
        console.log("mounted");
    });
</script>


<div >
    <div>
        <h1 in:fly="{{delay: 600, x: 500, duration: 1000}}" out:fly="{{delay: 100, x: -400, duration: 1000 }}">Hello</h1>
        <h2 in:fly="{{delay: 800, x: 500, duration: 1000}}" out:fly="{{delay: 200, x: -400, duration: 1000}}">My name is Sikang Sun</h2>
        <h2 in:fly="{{delay: 1000, x: 500, duration: 1000}}" out:fly="{{delay: 300, x: -400, duration: 1000}}">This is my website</h2>
        <h3 in:fly="{{delay: 1200, x: 500, duration: 1000}}" out:fly="{{delay: 400, x: -400, duration: 1000}}">Styling in progress...</h3>
    </div>
</div>