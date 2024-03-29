import { BASEDATAURL,BASEDATATASKS,REDISSECONDEXPIRY } from '$env/static/private';
// import type { RedisClientType } from '@redis/client';
import { createClient } from 'redis';

console.log('redis cach second', REDISSECONDEXPIRY)


export async function GetStory(storyid: string, apikey:string, refresh: boolean){

  
  const redisvalue = await getOrSetRedisContent(`story/story/${storyid}`, refresh, async ()=>{
      const resp = await fetch(
        `${BASEDATAURL}/${storyid}`,
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

export async function getComments(storyid: string, apikey:string, refresh:boolean) {


  const redisvalue = await getOrSetRedisContent(`story/comment/${storyid}`, refresh, async ()=>{
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





export async function getTasksByPage(listid: string, page: number,apikey:string, refresh=false, status?: string[]) {

    const queryparam = new URLSearchParams({
      page: `${page}`
    })

    if (status){
      if (status.length > 0){
        status.forEach(p=>queryparam.append("statuses", p))
        
      }
    }

    const query = queryparam.toString();
    const url = `${BASEDATATASKS}/${listid}/task?${query}`




    const redisvalue = await getOrSetRedisContent(`list/${listid}/page/${page}`, refresh, async ()=>{
      console.log(url)
      const resp = await fetch(
        url,
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

      console.log(url)
      const resp = await fetch(
        url,
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

  const redisSecond = (REDISSECONDEXPIRY) ? Number(REDISSECONDEXPIRY) : 60;

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
          await client.disconnect();
          return {status: "ok", data: value}
        }

        const data = await callback()
        // console.log('redis cach second', REDISSECONDEXPIRY)
        console.log("SETTING key from redis, data valid", key)
        await client.setEx(key, redisSecond,data);
        await client.disconnect();
        return {status: "set", data: data}
    } catch {
        console.log("no redis")
        return {status: "offline", data: ""}
    }
}