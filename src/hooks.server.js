import { connectToDB } from "$lib/db";

export const handle = (async ({ event, resolve }) => {
  const dbconn = await connectToDB();
  event.locals = { dbconn };
  const query = {
    text: 'INSERT INTO users(id,name,pass) VALUES($1, $2, $3)',
    values: [10, 'c','c'],
  }
  const res=await dbconn.query(query)
  return new Response(res.rows[0])
  const response = await resolve(event);
  dbconn.release();
  return response;
})