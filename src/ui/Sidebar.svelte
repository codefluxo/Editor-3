<script>
    import Fa from "svelte-fa";
import Inspector from "./Inspector.svelte";
import ObjectTree from "./ObjectTree.svelte";
    import { faCube, faCubes, faGears } from "@fortawesome/free-solid-svg-icons";

</script>
<div class="sidebar">
    <class class="header"><Fa scale={0.9} icon={faCubes}/>Objects</class>
    <ObjectTree/>
    <class class="header"><Fa translateY={0} scale={1} icon={faGears}/>Inspector</class>
    <Inspector/>
</div>

<style>
    .sidebar{
        width: 300px;
        background-color: #111;
        display: flex;
        flex-direction: column;
        
    }
    .header{
        padding: 2px 4px;
        border-top: 1px solid #333;
        background-color: #222;
        display: flex;
        gap: 3px;
        align-items: center;
    }
    
</style>