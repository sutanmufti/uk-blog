<script lang='ts'>
    export let x: number;
    export let y: number;
    export let display = false;
    let windowsWidth: number;
    let styledisplay = "none"
    $: if(display) {
        styledisplay = "inline-block"
        
    } else {
        styledisplay = "none"
    }

    $: style = `top:${y}px;left:${x}px; display: ${styledisplay}`
</script>

<svelte:window bind:innerWidth={windowsWidth}/>
<div id='main' style={style}>
    <div>
        <button on:click={()=>{display = false}}>close</button>
    </div>
    <div>
        Map tooltip {x} {y}  {windowsWidth}
    </div>
</div>


<style>
    #main {
        display: none;
        position: absolute;
        height: 300px;
        width: 200px;
        border: 2px solid rgb(240,240,240);
        border-radius: 5px;
        background-color: white;
        z-index: 99;
    }

    @media only screen and (max-width: 600px) {
        #main {
    background-color: lightblue;
  }
}
</style>