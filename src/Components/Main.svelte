<script>
    import { fly, fade , slide} from "svelte/transition";
    import { Router, Route, Link } from "svelte-routing";
    import Navbar from "./Navbar.svelte";
    import Home from "./Home.svelte";
    import Writings from "./Writings.svelte";
    import Resume from "./Resume.svelte";
    import Empty from "./Empty.svelte";
    import Footer from "./Footer.svelte";

    let url = "";
    let secret = false;
    const handleClick = (e) => {
      e.preventDefault();
      console.log("asdf");
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
        SSK. <span on:click={() => secret = true} on:keyup>?</span>
      </div> 
    </div>

    <Navbar/>
  </div>
  <section>
    <div class="playground">
      <Router url="/">
        <Route path="/" > 
          <div >
          <Home/>
          </div>
        </Route>
        <Route path="writings">
          <div in:fly="{{delay: 700, x: 500, duration: 1000}}" out:fly="{{x: -500, duration: 700}}">
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
      </Router>
    </div>
  </section>


</div>