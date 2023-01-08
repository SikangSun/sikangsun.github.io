<script>
    import { slide } from "svelte/transition";
    import Router from "svelte-spa-router";
    import Navbar from "./Navbar.svelte";
    import Home from "./Home.svelte";
    import Writings from "./Writings.svelte";
    import { secret } from './helper/stores.js';
    import Resume from "./Resume.svelte";
    import Empty from "./Empty.svelte";
    import Writing from "./Writing.svelte";

    let url = "";

  const prefix = ''
  const routes = {
    '/': Home,
    '/writings':  Writings,
    '/writing/:id': Writing,
    '/resume': Resume,
    '*': Empty
  }
</script>
  
<style>
  #name {
    font-size: 70px;
    user-select: none;
  }
  .playground {
    position: relative;
    display: grid;
    grid-template-rows: 1;
    grid-template-columns: 1;
    top: 50px;
    padding: 0px 0px 0px 30px;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 50px;
    min-height: 700px;
    min-width: 400px;
    height: auto;
    /* border: 1px solid black; */
  }
  .playground > :global(*)  {
    grid-row: 1;
    grid-column: 1;
  }
  section {
    overflow-x: hidden;
  }
  span {
    color: transparent;
  }

</style>

<div>
  <div>
    <div  id="name"  transition:slide={{duration: 400}}>
      <div>
        SSK. <span on:click={() => 	secret.set(true)} on:keyup>?</span>
      </div> 
    </div>

    <Navbar/>
  </div>
  <div class="playground">
  <Router {routes} {prefix}/>
  </div>
    <!-- <Router basepath="/">

      <div class="playground">
      <Route path="/" component={Home}> 
      </Route>
      <Route path="writings">
        <div>
          <Writings {secret}/>
        </div>
      </Route>
      <Route path="resume" >
        <div in:fade="{{delay:1000, duration:1000}}" out:fade>
          <Resume/>
        </div>
      </Route>
      <Route path="*">
        <div out:fade>
          <Empty/>
        </div>
      </Route>
    </div>
    </Router> -->



</div>