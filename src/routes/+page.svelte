<script>
    import Slidebar from "./Slidebar.svelte";
    let menubar=0
</script>
<div class=container>
    <button class='menu' on:click={()=>{
        menubar=1-menubar;
    }}>
        M
    </button>
    {#if menubar}
        <Slidebar></Slidebar>
    {/if}
    <div class='container-2'>
        <button class='start'>
            BẮT ĐẦU
        </button>
    </div>
</div>
<style>
    .container{
        display:grid;
        grid-template-columns: 1fr 2fr;
    }
    .container-2{
        display:flex;
        justify-content: center;
        align-items: center;
        flex-grow: 100%;
    }
    .menu{
        position: absolute;
        top:5vh;
        left:5vw;
    }
</style>
