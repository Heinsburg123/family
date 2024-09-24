<script>
    import {slide} from 'svelte/transition'
</script>

<div transition:slide = {{duration:200, axis:'x'}} class='sidebar'>
    <button>
        LÁ THƯ
    </button>
    <a href='/features/calendar'><button>LỊCH</button></a>
    <button>
        QUÀ
    </button>
</div>

<style>
    .sidebar
    {
        height: 100%;
        width: 30vw;
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