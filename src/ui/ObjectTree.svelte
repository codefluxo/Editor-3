<script>
    import { faCamera, faFolder } from "@fortawesome/free-solid-svg-icons";
    import { Project } from "../lib/Project";
    import ObjectTreeItem from "./ObjectTreeItem.svelte";
    import { onMount } from "svelte";

    var refresh = {};
    onMount(()=>{
        Project.current.refreshObjectTree = ()=>{
            refresh = {}
        }
    })
</script>

<div class="tree">
    {#key refresh}
        <ObjectTreeItem obj={Project.current.camera} icon={faCamera} />
        <ObjectTreeItem obj={Project.current.scene} icon={faFolder} />
    {/key}
</div>

<style>
    .tree {
        height: 200px;
        /* background-color: #0a0a0a; */
        /* resize: both; */
        overflow: auto;
    }
</style>
