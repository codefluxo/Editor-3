<script>
    import { faArrowDown19, faArrowDownUpAcrossLine, faArrowPointer, faArrowsH, faArrowsLeftRight, faArrowsRotate, faArrowsUpDownLeftRight, faEarth, faEarthAfrica, faEarthAsia, faGlobe, faRemove, faRotate, faScaleBalanced, faSquareCaretDown } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";

</script>
<div class="info">
    <div class="info-item"><div>Objects</div>: 0</div>
    <div class="info-item"><div>Vertices</div>: 0</div>
    <div class="info-item"><div>Triangles</div>: 0</div>
    <div class="info-item"><div>Render Time</div>: 0</div>
</div>

<style>
    .info{
        position: absolute;
        left: 8px;
        bottom: 8px;
        background-color: #17171767;
        border-radius: 4px;
        border: 1px solid #2222226b;
        padding: 2px;
        display: flex;
        flex-direction: column;
    }
    .info-item{
        display: flex;
        padding: 1px 0px;
        font-size: 11.9px;
        gap: 2px;
    }
    .info-item div{
        width: 80px;
    }
</style>