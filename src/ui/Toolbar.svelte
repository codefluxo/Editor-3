<script>
    import {
        faArrowsLeftRight,
        faArrowsRotate,
        faArrowsUpDownLeftRight,
        faGlobe,
    } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";
    import { Project } from "../lib/Project";
    var tc = Project.current.transformControls;
</script>

<div class="toolbar">
    <button
        class={tc.mode == "translate" ? "selected" : ""}
        on:click={() => {
            tc.mode = "translate";
        }}><Fa icon={faArrowsUpDownLeftRight} /></button
    >
    <button
        class={tc.mode == "rotate" ? "selected" : ""}
        on:click={() => {
            tc.mode = "rotate";
        }}><Fa icon={faArrowsRotate} /></button
    >
    <button
        class={tc.mode == "scale" ? "selected" : ""}
        on:click={() => {
            tc.mode = "scale";
        }}><Fa rotate={-45} icon={faArrowsLeftRight} /></button
    >
    <button
        class={tc.space == "world" ? "selected" : ""}
        on:click={() => {
            tc.space = tc.space == "world" ? "local" : "world";
        }}><Fa icon={faGlobe} /></button
    >
</div>

<style>
    .toolbar {
        position: absolute;
        left: 8px;
        top: 8px;
        background-color: #171717;
        border-radius: 4px;
        border: 1px solid #222;
        padding: 2px;
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
    button {
        width: 28px;
        height: 28px;
        font-size: 16px;
        padding: 0px;
        margin: 0px;
        border: none;
        border-radius: 4px;
        background-color: transparent;
        color: #888;
        cursor: pointer;
    }
    button:hover {
        background-color: #222;
    }
    button.selected {
        background-color: #153c5e;
        color: #aaa;
    }
    button.selected:hover {
        background-color: #1e5585;
    }
</style>
