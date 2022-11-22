<script>
  import { Router, Route, Link } from "svelte-routing";
  import Main from "./Components/Main.svelte";
  import Footer from "./Components/Footer.svelte";
  import Writing from "./Components/Writing.svelte";
  export let url = "";
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

  <Router url="{url}">
      <Route path="" component={Main}>
      </Route>
      <Route path="/writings/:id" let:params>
        <Writing id="{params.id}"/>
      </Route>
  </Router>

  </span>
  <Footer/>
  </body>

