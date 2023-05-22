import { BASEDATAURL,BASEDATATASKS } from '$env/static/private';




export async function GetStory(storyid: string, apikey:string){
  
    const resp = await fetch(
      `${BASEDATAURL}/${storyid}`,
      {
        method: 'GET',
        headers: {
          Authorization: apikey
        }
      }
    );
  
    const data = await resp.json();
    return data
  }

export async function getComments(storyid: string, apikey:string) {
    const resp = await fetch(
        `${BASEDATAURL}/${storyid}/comment`,
        {
        method: 'GET',
        headers: {
            Authorization: apikey
        }
        }
    );

    const data = await resp.json();
return data
}

export async function getTasksByPage(listid: string, page: number,apikey:string) {
    const query = new URLSearchParams({
      page: `${page}`,
    }).toString();
  
    const resp = await fetch(
      `${BASEDATATASKS}/${listid}/task?${query}`,
      {
        method: 'GET',
        headers: {
          Authorization: apikey
        }
      }
    );

    
    const data = await resp.json();
    console.log("data is data:", data)
    return data
  }