
<script>
   const src = "Sikang_Sun_Resume4.pdf"
</script>

<style>
   .zeDiv {
      margin: 10px 0 0 30px;
      width: 80%;
      height: auto;
      border-radius: 7px;
      padding: 0px 0px 10px 10px;
      border: 1px solid black;
   }
   hr {
      margin-right: 10px;
   }
   .update {
      position: relative;
      right: 0px;
   }
   a {
        text-decoration: none;
        color: black;
    }
   .head {
      font-size: 30px;
   }
   .download {
      margin: 10px 0 0 30px
   }
</style>
<a href={src} target="_blank" rel="noreferrer noopener">
   <div class="zeDiv">
      <div class="head">Click to View Resume</div>
      <hr/>
      <div>
         Undergraduate student at Purdue University

      </div>
      <div>
         Majoring Computer Science and Data Science
      </div>
      <div>
         Currently looking for SWE internship Summer 2023
      </div>
      <div class="update">
         Last Updated: Dec. 25, 2022
      </div>

   </div>
   <a href={src} download="Sikang_Sun_Resume">
   <button  class="download">Download</button>
   </a>
</a>
