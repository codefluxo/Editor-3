<script lang="ts">
    import { Object3D } from "three";
    import { Project } from "../../lib/Project";
    import { SelectObject } from "../../lib/Utils";


    export var onClick = ()=>{}

</script>

<div on:click={onClick} class="popup">
    <slot/>
</div>

<style>
    .popup {
        position: absolute;
        z-index: 1;
        left: 120px;
        top: 30px;
        /* width: 400px; */
        /* height: 300px; */
        background-color: #171717;
        border: 1px solid #222;
        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.432) 0 0 3px 2px;
        display: flex;
        padding: 4px;
        /* backdrop-filter: blur(1px); */
    }
</style>
