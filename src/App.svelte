<script>
  import Router from 'svelte-spa-router'
  import Main from "./Components/Main.svelte";
  import Footer from "./Components/Footer.svelte";

  export let url = "";

  const routes = {
    '/*': Main

  }
</script>
<style>
  body {
    background-color: #E8E8E8;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  min-height: 100vh;

    margin: 0px;
    content: 0px;
    padding: 0px;
    
  }
    .playground {


  }
  .playground > :global(*)  {
    grid-row: 1;
    grid-column: 1;
  }

</style>

  <body>
  <span class="playground">

  <!-- <Router basepath="">
    <div>
      <Route path="" >
        <Main/>
      </Route>
      <Route path="/writings/:id" let:params>
        <Writing id="{params.id}"/>
      </Route>
    </div>
  </Router> -->
  <Router {routes}/>
  </span>
  <Footer/>
  </body>

