<script lang='ts'>
    import type { Story,StorySuccess,Comment } from './SampleStory';

    export let data: {
            status: 200,
            name: string,
            story:  Comment
        };

    const comments = data.story.comments
    const {story} = data

    


    
    const commentssorted = data.story.comments.sort((a,b)=> Number(a.date) - Number(b.date))
    const commentP = commentssorted.map(d=>d.comment_text)


    
</script>





<div>
    <h1>{data.name}</h1>
    {#each commentssorted as comment, i}
    <div class='dialogue'>
        <div class='user'>
            {comment.user.username} • {((comment)=>{
                const date = new Date(Number(comment.date))
                const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
                const theyear = date.getFullYear()
                const formattedTime = `${monthNames[date.getMonth()]} ${theyear}`
                return formattedTime
            })(comment)}
        </div>
        <div class='comment'>
             {comment.comment_text}
        </div>
    </div>

    {/each }
</div>

<style>
    .dialogue {
        display: flex;
        /* border: 1px solid blue; */
    }
    .user {
        width: 200px;
        /* border: 2px solid purple */
    }
    .comment {
        /* border: 1px solid red; */
        flex: 1;
    }
</style>