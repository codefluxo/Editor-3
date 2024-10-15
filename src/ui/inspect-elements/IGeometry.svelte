<script lang="ts">
    import { Binding , Separator} from "svelte-tweakpane-ui";
    import { Project } from "../../lib/Project";
    import type { Mesh, CylinderGeometry } from "three";
    import IGeometryObject from "./IGeometryObject.svelte";

    var obj = Project.current.selectedObject as Mesh;
    var geom = obj.geometry;

    function refresh() {
        geom = obj.geometry;
    }
</script>

<Binding object={geom} key="type" label="Type" disabled />
<Binding object={geom} key="uuid" label="UUID" disabled />
<Binding object={geom} key="name" label="Name" />

<Separator/>

<IGeometryObject mesh={obj} geom={geom} refresh={refresh}/>
