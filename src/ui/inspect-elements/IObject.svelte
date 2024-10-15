<script>
    import { Binding, Separator } from "svelte-tweakpane-ui";
    import { Project } from "../../lib/Project";
    
    const obj = Project.current.selectedObject

</script>

<Binding object={obj} key="type" label="Type" disabled/>
<Binding object={obj} key="uuid" label="UUID" disabled/>
<Binding object={obj} key="name" label="Name" on:change={Project.current.refreshObjectTree}/>
<Binding object={obj} key="visible" label="Visible" on:change={Project.current.refreshObjectTree}/>
<Separator/>
<Binding object={obj} key="position" label="Position" />
<Binding object={obj} key="rotation" label="Rotation" />
<Binding object={obj} key="scale" label="Scale" />
<Separator/>
<Binding object={obj} key="castShadow" label="Cast Shadow" />
<Binding object={obj} key="receiveShadow" label="Receive Shadow" />
<Binding object={obj} key="frustumCulled" label="Frustum Culled" />
<Binding object={obj} key="renderOrder" label="Render Order" options={{step:1}}/>