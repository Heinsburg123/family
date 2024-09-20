import {json} from '@sveltejs/kit'
import jwt from 'jsonwebtoken'
import {SECRET} from '$env/static/private'

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({cookies, request}) => {
        const data= await request.formData();
        const username= {name:data.get('user')};
        const password=data.get('password');
        const accessToken=jwt.sign(username,SECRET)
        cookies.set('accessToken',accessToken,{path: '/login'})
    }
};

