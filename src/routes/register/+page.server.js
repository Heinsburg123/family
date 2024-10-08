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
	register: async (event) => {
        const data= await event.request.formData();
        const username= {name:data.get('user')};
        const normname=data.get('user')
        const email=data.get('email');
        const password=data.get('password');
        const accessToken=jwt.sign(username,SECRET);
        event.cookies.set('accessToken',accessToken,{path: '/'})
        event.locals.count+=1
        const query={
            text:'INSERT INTO users(email,password,name) VALUES($1,$2,$3)',
            values:[email,password,normname]
        }
        const dbconn= event.locals.db;
        await dbconn.query(query)

        throw redirect(303,'/features/manual')
    }
};

