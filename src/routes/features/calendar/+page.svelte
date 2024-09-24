<script>
    let today=new Date()
    let year=today.getFullYear();
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    
    function daysInMonth (month, year) 
    {
        return new Date(year, month, 0).getDate();
    }

    let num_days=[];
    let num;
    function put_in_days(month,year)
    {
        num_days=[]
        num=daysInMonth(month,year)
        for( let i=1;i<=num;i++){
            num_days.push(i)
        }
    }
    put_in_days(today.getMonth(),today.getFullYear())

</script>

<div class='container'>
    <div class='board'>
        <div class='header'>
            <button>b</button>
            <h2>September {year}</h2>
            <button>n</button>
        </div>
        {#each days as day }
            <div class='names'>
                <h3>{day}</h3>
            </div>
        {/each}
        
        {#each num_days as number}
            <div class=day>{number}</div>
        {/each}
    </div>
</div>
<style>
    .container,.header
    {
        display: flex;
        justify-content: space-between
    }
    .board
    {
        background-color:cadetblue;
        border-radius: 10px;
        height: 70vh;
        width: 70vw;
        display: grid;
        grid-template-rows:repeat(7,1fr);
        grid-template-columns: repeat(7,1fr);
        gap:5px;
        padding: 5px;
    }

    h2,h3
    {
        
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
    }
    h2{
        font-size: large;
    }
    h3{
        font-size: medium;
    }
    .header
    {
        background-color: darkgray;
        border-radius: 12px;
        padding:10px;
        grid-column-start: 1;
        grid-column-end: 8;
    }
    .day,.names
    {
        display: flex;
        align-self: center;
        justify-content: center;
    }
    .day
    {
        background-color:bisque;
        border-style:solid;
        font-size:20px;
        padding-top: 20px;
        padding-bottom: 20px;
        font-weight: bold;
        font-family: 'Courier New', Courier, monospace;
    }
</style>