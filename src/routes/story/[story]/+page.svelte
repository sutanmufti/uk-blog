<script lang='ts'>
    import type { Story,StorySuccess,Comment } from './SampleStory';

    export let data: {
            status: 200,
            name: string,
            story:  Comment
        };

    const comments = data.story.comments


    
    const commentssorted = data.story.comments.sort((a,b)=> Number(a.date) - Number(b.date))
    const commentP = commentssorted.map(d=>d.comment_text)


    
</script>





<div>
    <h1>{data.name}</h1>
    {#each commentP as comment, i}
        <p>
            {comment}
        </p>
    {/each }
</div>