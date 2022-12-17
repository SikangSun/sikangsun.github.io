<script>
    const src = "images/svelte-icon.png";
    const linkedin = "images/linkedin.png";
    const gmail = "images/gmail.png"
</script>
<style>
    #container {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        background-color: silver;
        width: 100%;
        height: 60px;
        border: 0px;
        padding-top: 5px;
        margin: 0px;
        position: absolute;
        bottom: 0;
        left: 0;
        vertical-align: middle;
    }
    #icon {
        vertical-align: middle;
        margin: 0px;
        padding-bottom: 3px;
        height: 15px;
        width: 15px;
    }
    #right-container {
        padding-right: 5px;
    }
    .image {
        margin: 0px;
        padding-bottom: 0px;
        height: 15px;
        width: 15px;
        background-color: white;
    }
    a {
        text-decoration: none;
        color: black;
    }

</style>

<div id="container">
        <span>
        This website is made with <img id="icon" {src} alt="Svelte icon"/>velte.js 
        </span>
        <span id="right-container">

            <div>
                <a href="https://www.linkedin.com/in/sikang-sun-a3ab10176/" target="_blank">
                    <img class="image" src={linkedin} alt="Linkedin icon"/> Linkedin
                </a>
            </div>
            <div> 
                <a href="mailto:sikangsun31@gmail.com" target="_blank">
                    <img class="image" style="width: 20px;" src={gmail} alt="Gmail icon"/> sikangsun31@gmail.com
                </a>
            </div>
        </span>
</div>
