<script lang="ts">
    import { Binding } from "svelte-tweakpane-ui";
    import type { MeshNormalMaterial } from "three";
    export var mat : MeshNormalMaterial
    
</script>


<Binding object={mat} key="vertexColors" label="Vertex Colors"/>
<!-- <Binding object={mat.bumpMap.} key="bumpMap" label="Vertex Colors"/> -->
