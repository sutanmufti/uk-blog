import { error } from '@sveltejs/kit';
import { APIKEY, CUSTOMFIELD_STORY } from '$env/static/private';
import { GetStory,getComments } from './Story';
import type { Story, StorySuccess, Comment } from './SampleStory';

export async function load({ params, url }) {
    const refresh = url.searchParams.get("refresh")
    const refreshredis = refresh == 'true'

    const post: Story = await GetStory(params.story,APIKEY, false);
    const comments: Comment = await getComments(params.story,APIKEY,refreshredis)

    
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
            post : post
        }
    }

    throw error(404, 'Not found');
}