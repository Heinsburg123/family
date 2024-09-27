<script>
    let today=new Date()
    let year=today.getFullYear();
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let clicked=0
    function daysInMonth (month, year) 
    {
        return new Date(year, month, 0).getDate();
    }

    let num_days=[];
    let cigars=[0];
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
            {#if number==today.getDate()}
                <button class='day' on:click={()=>{
                    clicked=1-clicked
                }} style="background-color:firebrick">{number}
                <p>{cigars[number]}</p></button>
            {:else}
                <button class='day'>{number}</button>
            {/if}
            
        {/each}
    </div>
    <div class='curtain' style="visibility:{clicked ? 'visible':'hidden'}"></div>
    <div class='popup' style="visibility:{clicked ? 'visible':'hidden'}">
        <h3>Hôm nay ba hút bao nhiêu điếu thuốc</h3>
        <form method="POST" action="?/send_num">
            <input name='cigar_num' type='number' value=0>
            <button on:click={()=>{
                clicked=0
            }}>Xác nhận</button>
        </form>
    </div>
    
</div>
<style>
    .container
    {
        display:flex;
        justify-content: center;
        align-items:center;
    }
    .header
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
    .curtain
    {
        z-index: 2;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: gray;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 50%;
    }
    .popup
    {
        position: absolute;
        background-color:indianred;
        z-index: 3;
        padding:5px
    }
    form
    {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 10px;
        gap:5px;
    }
    p
    {
        font-size: small;
        font-weight: bold;
        font-family: 'Courier New', Courier, monospace;
    }
</style>