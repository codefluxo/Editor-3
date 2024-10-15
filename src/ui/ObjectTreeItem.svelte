<script lang="ts">
    import {
        faPlay,
        faCube,
        faEye,
        faEyeSlash
    } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";
    import { Object3D } from "three";
    import { Project } from "../lib/Project";
    import { SelectObject } from "../lib/Utils";

    export var icon = faCube;
    export var obj: Object3D;
    export var pad = 0;
    var open = true;
    var padding_left = 4 + pad + (obj.children.length == 0 ? 16 : 0);

</script>

{#if obj != Project.current.helpers}
    <button
        on:click={() => {
            SelectObject(obj);
        }}
        on:dblclick={() => {}}
        class="item {Project.current.selectedObject == obj ? 'selected' : ''}"
        style="padding-left:{padding_left}px;"
    >
        {#if obj.children.length > 0}
            <button on:click={()=>{open=!open}}>
                <Fa rotate={open?90:0} translateY={0.1} scale={0.7} icon={faPlay} />
            </button>
        {/if}
        <Fa color={"skyblue"} {icon} />
        <span>{obj.name || obj.type}</span>
        <button
            on:click={() => {
                obj.visible = !obj.visible;
            }}
        >
            {#if obj.visible}
                <Fa scale={0.9} icon={faEye} />
                {:else}
                <Fa scale={0.9} icon={faEyeSlash} />
            {/if}
        </button>
    </button>

    {#if open && obj.children.length > 0}
        {#each obj.children as child}
            <svelte:self obj={child} pad={pad + 16} />
        {/each}
    {/if}
{/if}

<style>
    .item {
        display: flex;
        align-items: center;
        width: 100%;
        text-align: left;
        gap: 4px;
        padding-top: 3px;
        padding-bottom: 3px;
        padding-right: 4px;
        font-size: 11px;
        font-family:
            Roboto Mono,
            Source Code Pro,
            Menlo,
            Courier,
            monospace;
        color: #ffffff99;
        user-select: none;
    }
    .selected {
        background-color: #153c5e;
        color: #ccc;
    }
    .item:hover {
        background-color: #1a1a1a;
    }
    .selected:hover {
        background-color: #23639b;
    }
    span {
        flex-grow: 1;
    }
    button {
        padding: 0;
        margin: 0;
        border: none;
        background: none;
        color: #aaa;
        cursor: pointer;
    }
</style>
