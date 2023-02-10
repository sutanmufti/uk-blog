<script>
    export let x;
    export let y;
    export let display = false;

    let styledisplay = "none"
    $: if(display) {
        styledisplay = "inline-block"
    } else {
        styledisplay = "none"
    }
</script>
<div id='main' style={`top:${y}px;left:${x}px; display: ${styledisplay}`}>
    Map tooltip {x} {y}
</div>


<style>
    #main {
        display: none;
        position: fixed;
        height: 300px;
        width: 400px;
        border: 2px solid rgb(251,251,251);
        border-radius: 5px;
        background-color: white;
        z-index: 99;
    }
</style>