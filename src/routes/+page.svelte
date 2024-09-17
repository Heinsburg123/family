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
        display:flex;
        height: 100vh;
        width: 100vw;
    }
    .container-2{
        display:flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }
    .menu{
        position: absolute;
        top:5vh;
        left:5vw;
    }
</style>
