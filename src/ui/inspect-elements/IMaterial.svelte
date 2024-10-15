<script lang="ts">
    import {
        Binding,
        List,
        type ListOptions,
        Separator,
    } from "svelte-tweakpane-ui";
    import { Project } from "../../lib/Project";
    import { type Mesh, type Material, MeshBasicMaterial } from "three";
    import IMaterialObject from "./IMaterialObject.svelte";

    var obj = Project.current.selectedObject as Mesh;
    var mat = obj.material as Material;

    const options: ListOptions<number> = {
        MeshBasicMaterial: 0,
        MeshDepthMaterial: 1,
        MeshNormalMaterial: 2,
        MeshMatcapMaterial: 3,
        MeshPhongMaterial: 4,
        MeshToonMaterial: 5,
        MeshStandardMaterial: 6,
        ShaderMaterial: 7,
        ShadowMaterial: 8,
        RawShaderMaterial: 9,
    };

    let selection = options[mat.type];
    let sideSelection = mat.side;
    let blendingSelection = mat.blending;

    function refresh() {
        mat = obj.material as Material;
    }
</script>

<List bind:value={selection} label="Type" {options} />
<Binding object={mat} key="uuid" label="UUID" disabled />
<Binding object={mat} key="name" label="Name" />

<Separator />
<IMaterialObject mat={mat}/>
<Separator />

<List
    bind:value={sideSelection}
    label="Side"
    options={{ Front: 0, Back: 1, Double: 2 }}
    on:change={() => {
        mat.side = sideSelection;
    }}
/>
<List
    bind:value={blendingSelection}
    label="Blending"
    options={{
        NoBlending: 0,
        NormalBlending: 1,
        AdditiveBlending: 2,
        SubtractiveBlending: 3,
        MultiplyBlending: 4,
        CustomBlending: 5,
    }}
    on:change={() => {
        mat.blending = blendingSelection;
    }}
/>
<Binding
    object={mat}
    key="opacity"
    label="Opacity"
    options={{ min: 0, max: 1, step: 0.01 }}
/>
<Binding
    object={mat}
    key="alphaTest"
    label="Alpha Test"
    options={{ min: 0, max: 1, step: 0.01 }}
/>
<Binding object={mat} key="visible" label="Visible" />
<Binding object={mat} key="forceSinglePass" label="Force Single Pass" />
<Binding object={mat} key="depthTest" label="Depth Test" />
<Binding object={mat} key="depthWrite" label="Depth Write" />
