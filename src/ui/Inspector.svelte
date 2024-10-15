<script>
    import { Binding, Pane, AutoObject, ThemeUtils } from "svelte-tweakpane-ui";
    import { Project } from "../lib/Project";
    import IObject from "./inspect-elements/IObject.svelte";
    import IGeometry from "./inspect-elements/IGeometry.svelte";
    import IMaterial from "./inspect-elements/IMaterial.svelte";

    export var obj = Project.current.selectedObject;

    var selectedIndex = 0;

    var refresh = {};

    Project.current.refreshInspector = () => {
        obj = Project.current.selectedObject
        refresh = {}
    };
</script>

{#key refresh}
    <div class="tabs">
        {#if obj.isObject3D}
            <button
                on:click={() => {
                    selectedIndex = 0;
                }}
                class="tab {selectedIndex == 0 ? 'tab-selected' : ''}"
                >Object</button
            >
        {/if}
        {#if obj.type == "Mesh"}
            <button
                on:click={() => {
                    selectedIndex = 1;
                }}
                class="tab {selectedIndex == 1 ? 'tab-selected' : ''}"
                >Geometry</button
            >
        {/if}
        {#if obj.type == "Mesh"}
            <button
                on:click={() => {
                    selectedIndex = 2;
                }}
                class="tab {selectedIndex == 2 ? 'tab-selected' : ''}"
                >Material</button
            >
        {/if}
    </div>

    <div class="inspector">
        <div class="inspector-container">
            <div class="inspector-container-2">
                <Pane position="inline" theme={ThemeUtils.presets.translucent}>
                    {#if selectedIndex == 0}
                        <IObject />
                    {/if}
                    {#if selectedIndex == 1}
                        <IGeometry />
                    {/if}
                    {#if selectedIndex == 2}
                        <IMaterial />
                    {/if}
                </Pane>
            </div>
        </div>
    </div>
{/key}

<style>
    .inspector {
        flex-grow: 1;
    }
    .inspector-container {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .inspector-container-2 {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: auto;
    }
    .tabs {
        border-bottom: 1px solid #222;
        display: flex;
    }
    .tab {
        border: none;
        background: none;
        color: #888;
        padding: 4px 8px;
        border-right: 1px solid #222;
        margin: 0;
        cursor: pointer;
    }
    .tab-selected {
        background-color: #171717;
        height: calc(100% + 1px);
        padding-top: 3px;
        border-top: 1px solid #2d80c9;
    }
</style>
