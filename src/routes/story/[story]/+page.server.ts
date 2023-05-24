import { error } from '@sveltejs/kit';
import { APIKEY, CUSTOMFIELD_STORY,CUSTOMFIELD_IMAGE } from '$env/static/private';
import { GetStory,getComments } from './Story';
import type { Story, StorySuccess, Comment, CustomFieldImage } from './SampleStory';

export async function load({ params, url }) {
    const refresh = url.searchParams.get("refresh")
    const refreshredis = refresh == 'true'

    const post: Story = await GetStory(params.story,APIKEY, refreshredis);
    const comments: Comment = await getComments(params.story,APIKEY,refreshredis)
    const image = <CustomFieldImage[]>post.custom_fields.filter(d=>d.id===CUSTOMFIELD_IMAGE && d.type=='attachment')

    // console.log('comments:',comments)
    console.log('thecomments:',comments.comments.map(d=>d.comment.map(p=>p.attachment)))
    const imageExtract = image[0].value?.map(y=>{


        const {
            // thumbnail_large,
            thumbnail_medium,
            // thumbnail_small,
            url} = y
        return {
            thumbnail: thumbnail_medium,
            url: url
        }
    })

    const imgurl = (imageExtract) ? imageExtract[0].url : '';
    
    if (post.err){
        throw error(404, 'Not found');

    }

    const successpost: StorySuccess = post

    const title = successpost.name

    if (post) {
        return {
            status: 200,
            name: title,
            story:  comments,
            post : post,
            img : imgurl
        }
    }

    throw error(404, 'Not found');
}