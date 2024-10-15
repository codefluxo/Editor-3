<script lang="ts">
    import { Binding } from "svelte-tweakpane-ui";
    import type { Material, MeshNormalMaterial } from "three";
    import INormalMaterial from "./materials/INormalMaterial.svelte";
    export var mat : Material | any
</script>

<INormalMaterial mat={mat}/>