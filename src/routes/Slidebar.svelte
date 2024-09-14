<script>
    import {fly} from 'svelte/transition'
</script>

<div transition:fly = {{duration:200, x:0, y:0}} class='sidebar'>
    <button>
        LÁ THƯ
    </button>
    <button>
        LỊCH 
    </button>
    <button>
        QUÀ
    </button>
</div>

<style>
    .sidebar
    {
        height: 100vh;
        background-color: black;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:100px;
    }
    button
    {
        color: orange;
        background-color: black;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: bold;
        font-size:30px;
    }
</style>