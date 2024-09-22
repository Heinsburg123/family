import {redirect} from '@sveltejs/kit'
import jwt from 'jsonwebtoken'
import {SECRET} from '$env/static/private'


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
            text:'INSERT INTO users(id,email,password,name) VALUES($1,$2,$3,$4)',
            values:[event.locals.count,email,password,normname]
        }
        const dbconn= event.locals.db;
        await dbconn.query(query)

        throw redirect(307,'/features/manual')
    }
};

