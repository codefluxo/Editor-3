<script lang="ts">
    import { Binding } from "svelte-tweakpane-ui";
    import type { MeshBasicMaterial } from "three";
    export var mat : MeshBasicMaterial
    
</script>


<Binding object={mat} key="visible"/>