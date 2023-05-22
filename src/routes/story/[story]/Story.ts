import { BASEDATAURL,BASEDATATASKS } from '$env/static/private';
// import type { RedisClientType } from '@redis/client';
import { createClient } from 'redis';


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


  const redisvalue = await getOrSetRedisContent(`story/${storyid}`, false, async ()=>{
        const resp = await fetch(
          `${BASEDATAURL}/${storyid}/comment`,
          {
          method: 'GET',
          headers: {
              Authorization: apikey
          }
          }
      );

      const data = await resp.text();
    return data
  })

  if((redisvalue.status == 'ok') || (redisvalue.status == 'set')){
    return JSON.parse(redisvalue.data)
  }
  // this means redis is offline
  else {
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

  
}





export async function getTasksByPage(listid: string, page: number,apikey:string) {
    const redisvalue = await getOrSetRedisContent(`list/${listid}/page/${page}`, false, async ()=>{
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
  
      
      const data = await resp.text();
      return data
    })

    if((redisvalue.status == 'ok') || (redisvalue.status == 'set')){
      return JSON.parse(redisvalue.data)
    }
    // this means redis is offline
    else {

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
      return data
    }
  }

/**
 * get the 'key' from redis, else, call the callback function that sets the value to redis
 * 'refresh' true to reset the cache
 * 
 * @param key 
 * @param refresh
 * @param callback 
 * @returns 
 */
async function getOrSetRedisContent(key: string, refresh: boolean, callback:  ()=>Promise<string>): Promise<{ status: "ok" | "set" | "offline"; data: string; }>{
  const client = createClient(
    {
      socket:{
          connectTimeout: 10000,
          reconnectStrategy: false
      }
    });

    try{
        await client.connect();
        const value = await client.get(key);
        if (value && !refresh){
          console.log("getting key from redis, data valid", key)
          return {status: "ok", data: value}
        }

        const data = await callback()
        console.log("SETTING key from redis, data valid", key)
        await client.setEx(key, 10*60,data);
        await client.disconnect();
        return {status: "set", data: data}
    } catch {
        console.log("no redis")
        return {status: "offline", data: ""}
}
}