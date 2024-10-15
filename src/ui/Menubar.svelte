<script>
    import {
        faCheckSquare,
        faSquare,
        faBullseye,
        faEdit,
        faFile,
        faInfoCircle,
        faPlusCircle,
    } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";
    import AddMenu from "./menus/AddMenu.svelte";
    import Button from "./Button.svelte";

    var autoSave = true

    var openAddMenu = false
</script>

<div class="menubar">
    <Button icon={faFile}>File</Button>
    <Button icon={faEdit}>Edit</Button>
    <Button onClick={()=>{openAddMenu=!openAddMenu}} icon={faPlusCircle}>Add</Button>
    <Button icon={faBullseye}>View</Button>
    <Button icon={faInfoCircle}>help</Button>
    <div style="flex-grow:1"></div>
    <Button iconColor={autoSave?"lightblue":null} icon={autoSave?faCheckSquare:faSquare} onClick={()=>{autoSave=!autoSave}}>Auto Save</Button>
    <Button>v162</Button>
</div>

{#if openAddMenu}
<AddMenu onClick={()=>{openAddMenu=false}}/>
{/if}

<style>
    .menubar {
        padding: 4px;
        background-color: #111;
        display: flex;
        gap: 0px;
    }
</style>
