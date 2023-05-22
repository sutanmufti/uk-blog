import { error } from '@sveltejs/kit';
import { APIKEY, LIST,CUSTOMFIELD_LOCATION,CUSTOMFIELD_IMAGE } from '$env/static/private';
import { getTasksByPage } from '../story/[story]/Story';
import type { CustomFieldLocation,CustomFieldImage, Tasks, } from '../story/[story]/SampleStory';

export async function load() {
    const posts: {tasks: Tasks[]} = await getTasksByPage(LIST,0,APIKEY);

    const stories = posts.tasks.map(d=> {
        
        const location = <CustomFieldLocation[]> d.custom_fields.filter(d=>d.id===CUSTOMFIELD_LOCATION && d.type=='location')
        const image = <CustomFieldImage[]>d.custom_fields.filter(d=>d.id===CUSTOMFIELD_IMAGE && d.type=='attachment')

        const imageExtract = image[0].value?.map(y=>{


            const {thumbnail_large,
                thumbnail_medium,
                thumbnail_small,
                url} = y
            return {
                thumbnail: thumbnail_medium,
                url: url
            }
        })

        const locationfield = (location[0]) ? location[0].value?.location : {lat: undefined, lng: undefined}
        // console.log("is location?")
        return {
            id: d.id,
            title: d.name,
            description: d.description,
            location: locationfield,
            time: Number(d.date_created),
            image: imageExtract
    }})


    

    
    
   if (posts){
    return {
        status: 200,
        data: stories,
        posts: posts,
    }
   }

    throw error(404, 'Not found');
}