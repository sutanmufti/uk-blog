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



<div class='center'>


    <div class='story-container'>
            <div class='story'>
                <h1>{data.name}</h1>
                {#each commentssorted as comment, i}
                <div class='dialogue'>
                    <div class='user'>
                        
                        <div style='color: {comment.user.color}'>
                            {comment.user.username} 
                        </div>
                        <div>
                        • {((comment)=>{
                            const date = new Date(Number(comment.date))
                            const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
                            const theyear = date.getFullYear()
                            const formattedTime = `${monthNames[date.getMonth()]} ${theyear}`
                            return formattedTime
                        })(comment)}
                        </div>
                    </div>
                        <div class='comment'>
                            {comment.comment_text}
                        </div>
                </div>
                
                    {/each }
            </div>
        </div>
</div>
<style>
    .story-container{
        width: 800px;
        /* border: 1px solid red; */
    }
    
    .center {
        display: flex;
        align-items: center;
        flex-direction: column;
        /* border: 1px solid blue; */
    }

    .dialogue {
        display: flex;
        margin: 15px;
        /* border: 1px solid blue; */
    }
    .user {
        width: 120px;
        color: rgb(200, 200, 200);
        border-right: 1px solid rgb(199, 199, 199);
        /* border: 2px solid purple */
    }
    .comment {
        /* border: 1px solid red; */
        flex: 1;
        margin-left: 20px;
    }



    @media only screen and (max-width: 600px) {
        .story-container{
            width: 370px;
            /* border: 1px solid red; */
        }
        .dialogue {
            display: flex;
            margin: 15px;
            margin-bottom: 30px;
            flex-direction: column;
            /* border: 1px solid blue; */
        }

        .user {
            /* width: 120px; */
            flex: 1;
            display: flex;
            justify-content: space-between;
            width: 100%;
            color: rgb(200, 200, 200);
            border-right: 0px solid black;
            border-bottom: 1px solid rgb(199, 199, 199);
            margin-bottom: 10px;
            /* border: 2px solid purple */
        }
        .comment {
        /* border: 1px solid red; */
        flex: 1;
        margin-left: 0px;
    }
    }
</style>