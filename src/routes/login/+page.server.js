import {redirect} from '@sveltejs/kit'
import jwt from 'jsonwebtoken'
import {SECRET} from '$env/static/private'

/** @type {import('./$types').PageServerLoad} */

export function load(event)
{
    const claim=event.locals.access;
    if(claim)
    {
        throw redirect(307,'/features/manual')
    }
}


/** @type {import('./$types').Actions} */

export const actions = {
	login: async (event) => {
        const data= await event.request.formData();
        const email=data.get('email');
        const password=data.get('password');
        const query={
            text:'SELECT email,password,name FROM users WHERE email=$1',
            values:[email]
        }
        const dbconn=event.locals.db
        const res= await dbconn.query(query)
        if(res.rowCount==0)
        {
            return{success:false}
        }
        if(res.rows[0].password==password)
        {   
            const keyemail= {name:res.rows[0].name};
            const accessToken=jwt.sign(keyemail,SECRET)
            event.cookies.set('accessToken',accessToken,{path: '/'})
            throw redirect(303,'features/manual')
        }
        else
        {
            return{success:false}
        }
    }
};

