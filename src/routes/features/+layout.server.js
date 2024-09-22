/** @type {import('./$types').LayoutServerLoad} */
import { redirect } from '@sveltejs/kit'

export function load(event)
{
    const claim=event.locals.access;
    if(!claim)
    {
        throw redirect(303,'/')
    }
}
