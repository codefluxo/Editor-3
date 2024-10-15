<script lang="ts">
    import { onMount } from "svelte";
    import { Project } from "../lib/Project";

    var container: HTMLDivElement;

    onMount(() => {
        var project = Project.current;
        container.appendChild(project.renderer.domElement);
        resize();
    });
    function resize() {
        var project = Project.current;
        var rect = project.renderer.domElement.parentElement?.getBoundingClientRect();
        if (rect) {
            var w = rect.width - 1
            var h = rect.height - 1
            project.renderer.setSize(w, h);
            project.camera.aspect = (w/h)
            project.camera.updateProjectionMatrix()
        }
    }
</script>

<svelte:window on:resize={resize} />

<div class="canvas">
    <div class="container-1">
        <div bind:this={container} class="container"></div>
        <slot/>
    </div>
</div>

<style>
    .canvas {
        flex-grow: 1;
        background-color: #111;
        border: 1px solid #333;
    }
    .container-1 {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .container {
        position: absolute;
        width: 100%;
        height: 100%;
    }
</style>
