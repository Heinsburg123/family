import { connectToDB } from "$lib/db";

export const handle = (async ({ event, resolve }) => {
  const dbconn = await connectToDB();
  event.locals = { dbconn };
  const query = {
    text: 'SELECT * FROM users',
  }
  const res=await dbconn.query(query)
  return new Response(res.rows[0].name)
  const response = await resolve(event);
  dbconn.release();
  return response;
})