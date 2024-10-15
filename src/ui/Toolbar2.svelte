<script>
    import Fa from "svelte-fa";
import { Project } from "../lib/Project";
    import { faDashcube } from "@fortawesome/free-brands-svg-icons";



</script>
<div class="toolbar">
    <select name="" id="">
        <option value="camera">Camera</option>
    </select>
    <select name="" id="">
        <option value="Solid">Solid</option>
        <option value="Normal">Normal</option>
        <option value="Wireframe">Wireframe</option>
    </select>
</div>

<style>
    .toolbar{
        position: absolute;
        right: 8px;
        top: 8px;
        display: flex;
        gap: 4px;
    }

    select{
        background-color: #171717;
        border-radius: 4px;
        border: 1px solid #222;
        padding: 2px;
        color: #888;
        min-width: 100px;
        outline: none;
    }
</style>