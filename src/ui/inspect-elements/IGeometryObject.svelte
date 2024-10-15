<script lang="ts">
    import { Binding, Folder } from "svelte-tweakpane-ui";
    import { Mesh, BufferGeometry } from "three";
    import { GetGeometryClass, ToAny, ToTitleCase } from "../../lib/Utils";

    export var mesh: Mesh;
    export var geom: BufferGeometry;
    export var refresh = () => {};

    var Geometry = GetGeometryClass(geom);

    var params = { ...(geom as any).parameters };

    function ChangeGeometry() {
        if (Geometry) {
            mesh.geometry = Geometry.fromJSON(params);
            refresh();
        }
    }
</script>

{#if Geometry}
    {#each Object.keys(params) as key}
        {#if typeof params[key] == "number" || typeof params[key] == "boolean"}
            {#if key.toLowerCase().includes("segment") || key
                    .toLowerCase()
                    .includes("detail")}
                <Binding
                    object={params}
                    key={ToAny(key)}
                    label={ToTitleCase(key)}
                    on:change={ChangeGeometry}
                    options={{ min: 1, step: 1 }}
                />
            {:else}
                <Binding
                    object={params}
                    key={ToAny(key)}
                    label={ToTitleCase(key)}
                    on:change={ChangeGeometry}
                />
            {/if}
        {/if}
    {/each}
{/if}
