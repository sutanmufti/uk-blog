<script>
    import * as d3 from 'd3'
    import { onMount } from 'svelte';
    import Maptooltip from '$lib/components/Maptooltip.svelte';


    let london;

    let showtooltip = false;
    
    let tooltipclick = false;
    
    let m = { x: 0, y: 0 };
    function mousemove (event) {
        m.x = event.clientX;
		m.y = event.clientY;
    }

    function removeTooltip (){
    }
</script>
<Maptooltip x={m.x} y={m.y} display={showtooltip}/>

<svelte:window on:click={removeTooltip}></svelte:window>

<div  class='main'>
    <div
    
    class='head headone hero'>
        <div>
            <div style='text-align:start'>
                    <span class='title'>
                    Indonesian survival guide in the UK 
                </span>
                </div>
                <div class='caption'>
                    We collect stories from Indonesians accross the UK. This is the knowledge repository for Indonesian in the UK
                </div>
                <div class='goto'>
                    <button id='go'>Go to Blog</button>
                    <button id='colaborate'>I am Arriving in the UK</button>
                </div>
                <!-- <form  action="/action_page.php">
                    <input class="searchinput" type="text" placeholder="Search.." name="search">
                  </form> -->

        </div>
    </div>
    <div class='head'>
        <!-- <div id='pointscontainer'> -->
            <svg id='points' style='fill:#1067de'>
                <circle on:keydown={()=>{showtooltip = false}} on:click={(event)=>{
                    if (!tooltipclick){
                        m.x = event.clientX;
                        m.y = event.clientY;
                        showtooltip = true
                        console.log(showtooltip)
                        console.log("I am clicked....!");}
                        
                    }}
                    cx="55%" cy="68%" r="5" id='liverpool'/>
                <circle on:mouseenter={()=>{console.log("hover!")}} cx="60%" cy="67%" r="5" id='manchester'/>
                <circle on:mouseenter={()=>{console.log("hover!")}} cx="67%" cy="64%" r="5" id='leeds'/>
                <circle cx="54%" cy="45%" r="5" id='edinburgh'/>
                <circle cx="83%" cy="85%" r="5" id='london'/>
            </svg>
        <!-- </div> -->
        <div id='ukcontainer'>
            <img src="britain.svg" width='300px' alt="" id='uk'>
        </div>
    </div>


</div>


<style>
    .searchinput {
        width: 80%;
        height: 30px;
        margin-top: 20px;
        border: 1px solid grey;
        border-radius: 20px;
        padding: 10px;
    }

    #points {
        position: absolute;
        width: 300px;
        height: 500px;
        /* border: 1px solid red; */
        /* top: -80%; */
    }
    #ukcontainer {
        display: flex;
        align-items: flex-start;
        justify-content: center;
    }
    .head {
        /* border: 1px solid red; */
        display: flex;
        /* text-align: center; */
        align-items: center;
        justify-content: center;
        text-align: start;
        
    }

    .headone {
        width: 600px;
        height: 60vh;
        justify-content: start;
        flex-flow: row;
    }
    .main {
        /* border: 1px solid black; */
        margin: auto;
        text-align: start;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 90vh;
    }
    .title {
        font-size: 2em;
        text-align:start;
        display: block;
    }

    .hero {
        text-align:start;
    }

    .caption {
        font-size: 1em;
        margin-top: 10px;
        display: block;
    }

    .goto {
        margin-top: 20px;
    }

    #go {
        color: white;
        border: 0;
        padding: 10px 20px 10px 20px;
        background-color: rgb(16,103,222);
        border-radius: 5px;
        cursor: pointer;
        transition: box-shadow 0.2s
    }

    #colaborate {
        /* color: white; */
        color: black;
        border: 1px solid rgb(216, 216, 216);
        padding: 10px 20px 10px 20px;
        background-color: rgb(255, 255, 255);
        border-radius: 5px;
        cursor: pointer;
        transition: box-shadow 0.2s
    }
    #colaborate:hover {
        box-shadow: 0 0 5px rgb(16,103,222);
    }

    #go:hover {
        box-shadow: 0 0 5px rgb(16,103,222);
    }



    @media only screen and (max-width: 600px) {
        .main {
    /* background-color: orange; */
    flex-flow: column;
  }
  .headone {
    width: 60vw;
  }
  /* #uk {
    width: 50vw;
  } */
  /* #points {
    width: 50vw;
    height: 50vw;
  } */
}


circle {
    cursor: pointer;
}

</style>