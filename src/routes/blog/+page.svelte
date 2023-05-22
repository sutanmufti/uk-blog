<script lang='ts'>


    export let data;
    import Story from './Story.svelte';

    const stories = data.data
    
    const posts = data.posts


    

    const titles = stories.map(d=>d.title)
    


</script>

<div class='stories'>
    <div class='contents'>
        {#each stories as t,i}
            <Story title={t.title} description={t.description} lat={t.location?.lat} long={t.location?.lng} image={t.image} created={t.time} storyid={t.id}/>
        
        {/each}
    </div>
</div>


<!-- {JSON.stringify(data.posts)} -->

<style>
    .stories{
        /* border: 1px solid red; */
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .contents {
        width: 1000px;
    }
</style>