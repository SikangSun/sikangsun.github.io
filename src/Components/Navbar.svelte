<script>
    import { navigate } from "svelte-routing";
    import { slide, fly } from "svelte/transition"
    const goHome = (e) => {
        e.preventDefault();
        navigate("/", { replace: true });
    }

    const goWritings = (e) => {
        e.preventDefault();
        navigate("/writings", { replace: true });
    }

    const goResume = (e) => {
        e.preventDefault();
        navigate("/resume", { replace: true });
    }
</script>

<style>
    #container {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        background-color: grey;
        width:100%;
        height: 50px;
        border: 0px;
        padding:0px;
        margin:0px;
        position: absolute;
        left:0;
    }
    #blank {
        width: 2%;
    }
    .navbaritem{
        border: none;
        display: block;
        color: black;
        text-align: center;
        padding: 14px 16px;
        border: 1px solid black;
        text-decoration: none;
        background-color: white;
        transition-duration: 0.3s;
    }
    .navbaritem:hover{
        background-color: grey; 
        cursor: pointer;
    }
</style>

<div id="container" in:slide={{duration: 400}} out:fly>
    <div id="blank">

    </div>
    <div class="navbaritem" on:click={goHome} on:keyup={goHome}>Home</div>
    <div class="navbaritem" on:click={goWritings} on:keyup={goWritings}>Writings</div>

    <span style="margin-left: auto;"/>  
    <div class="navbaritem"  on:click={goResume} on:keyup={goResume}>Resume</div>
    <div id="blank"/>
</div>