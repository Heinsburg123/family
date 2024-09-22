/** @type {import('./$types').PageServerLoad} */
import { redirect } from '@sveltejs/kit'

export function load(event)
{
    const claim=event.locals.access;
    if(!claim)
    {
        throw redirect(307,'/register')
    }
}
