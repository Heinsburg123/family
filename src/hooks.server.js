import jwt from 'jsonwebtoken'
import { SECRET } from '$env/static/private'
import { connectToDB } from '$lib/db'

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({event,resolve}){
  let token=event.cookies.get('accessToken')
  event.locals.access=false
  if(token!=null)
  {
    const claims=jwt.verify(token,SECRET)
    if(claims)
    {
      event.locals.access=true
    }
    else
    {
      event.locals.access=false
    }
  }
  
  const dbconn=await connectToDB()
  event.locals.db=dbconn
  dbconn.release()
  return await resolve(event)
}