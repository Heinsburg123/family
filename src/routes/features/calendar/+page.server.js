import { jwtDecode } from "jwt-decode";

/** @type {import('./$types').PageLoad} */

let today=new Date()

export async function load(event)
{
    const dbconn=event.locals.db;
    const token = event.cookies.get('accessToken')
    const name=jwtDecode(token).name
    let cigars=[]
    const query={
        text:'SELECT day,amount FROM cigars WHERE name=$1 AND month=$2',
        values:[name,today.getMonth()]
    }
    const res = await dbconn.query(query)
    for(let i=0;i<res.rowCount;i++)
    {
        cigars.push({num_day:res.rows[i].day,num:res.rows[i].amount})
    }
    return{
        arr:cigars
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    send_num: async(event)=>{
        const data = await event.request.formData();
        const num = data.get('cigar_num');
        const token = await event.cookies.get('accessToken')
        const name=jwtDecode(token).name
        const dbconn=event.locals.db;
        let query={
            text:'SELECT month,day,name FROM cigars WHERE month=$1 AND day=$2 AND name=$3',
            values:[today.getMonth(),today.getDate(),name]
        }
        const check=await dbconn.query(query)
        if (check.rowCount!=0)
        {
            query={
                text:'DELETE FROM cigars WHERE month=$1 AND day=$2 AND name=$3',
                values:[today.getMonth(),today.getDate(),name]
            }
            await dbconn.query(query)
        }
        query={
            text:'INSERT INTO cigars(month,day,amount,name) VALUES($1,$2,$3,$4)',
            values:[today.getMonth(),today.getDate(),num,name]
        }
        await dbconn.query(query)

    } 
}