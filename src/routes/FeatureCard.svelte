<script lang='ts'>
    export let title: string;
    export let content: string ;
</script>

<div id='main'>
    <div id='title'>
        {title}
    </div>
    {content}
</div>


<style>
    #title {
        color: black;
        font-size: larger;
        padding: 0;
        margin-bottom: 10px;
    }
    #main {
        display: inline-block;
        background-color: white;
        border: 1px solid rgb(220, 220, 220);
        border-radius: 15px;
        width: 300px;
        height: 300px;
        padding: 10px;
        margin: 0 5px 5px 5px;
    }
</style>