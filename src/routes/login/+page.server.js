import {redirect} from '@sveltejs/kit'
import jwt from 'jsonwebtoken'
import {SECRET} from '$env/static/private'


/** @type {import('./$types').Actions} */

export const actions = {
	login: async (event) => {
        const data= await event.request.formData();
        const keyemail= {name:data.get('email')};
        const email=data.get('email');
        const password=data.get('password');
        
        const query={
            text:'SELECT email,password FROM users WHERE email=$1',
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
            const accessToken=jwt.sign(keyemail,SECRET)
            event.cookies.set('accessToken',accessToken,{path: '/'})
            throw redirect(307,'/features/manual')
        }
        else
        {
            return{success:false}
        }
    }
};

