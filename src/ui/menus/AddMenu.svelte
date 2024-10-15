<script lang="ts">
    import { Object3D, Mesh, BoxGeometry, MeshStandardMaterial, BufferGeometry } from "three";
    import { Project } from "../../lib/Project";
    import { SelectObject } from "../../lib/Utils";
    import Button from "../Button.svelte";
    import Popup from "./Popup.svelte";
    import * as THREE from "three"
    export var onClick = ()=>{}

    function AddObject(obj: Object3D) {
        var parent = Project.current.selectedObject;
        if (parent == Project.current.camera) {
            parent = Project.current.scene;
        }
        parent.add(obj);
        Project.current.refreshObjectTree()
    }
    function AddGroup() {
        var obj = new Object3D();
        obj.name = "Group"
        AddObject(obj);
    }
    function AddMesh(geom:BufferGeometry) {
        var obj = new Mesh(geom, new MeshStandardMaterial());
        obj.name = geom.type.replace("Geometry", "")
        AddObject(obj);
    }
    function AddSprite() {
        var obj = new THREE.Sprite(new THREE.SpriteMaterial());
        obj.name = "Sprite"
        AddObject(obj);
    }
    function AddLight(light:THREE.Light) {
        light.name = light.type
        AddObject(light);
    }
    function AddOrthographicCamera() {
        var obj = new THREE.OrthographicCamera()
        obj.name = obj.type
        AddObject(obj);
    }
    function AddPerspectiveCamera() {
        var obj = new THREE.PerspectiveCamera()
        obj.name = obj.type
        AddObject(obj);
    }

</script>

<Popup {onClick}>
    <div class="col">
        <Button onClick={AddGroup}>Group</Button>
        <div class="category">Mesh</div>
        <Button onClick={()=>{AddMesh(new THREE.BoxGeometry())}}>Box</Button>
        <Button onClick={()=>{AddMesh(new THREE.CapsuleGeometry())}}>Capsule</Button>
        <Button onClick={()=>{AddMesh(new THREE.CircleGeometry())}}>Circle</Button>
        <Button onClick={()=>{AddMesh(new THREE.CylinderGeometry())}}>Cylinder</Button>
        <Button onClick={()=>{AddMesh(new THREE.PlaneGeometry())}}>Plane</Button>
        <Button onClick={()=>{AddMesh(new THREE.SphereGeometry())}}>Sphere</Button>
        <Button onClick={AddSprite}>Sprite</Button>
    </div>
    <div class="col">
        <div class="category">Other Mesh</div>
        <Button onClick={()=>{AddMesh(new THREE.DodecahedronGeometry())}}>Dodecahedron</Button>
        <Button onClick={()=>{AddMesh(new THREE.IcosahedronGeometry())}}>Icosahedron</Button>
        <Button onClick={()=>{AddMesh(new THREE.OctahedronGeometry())}}>Octahedron</Button>
        <Button onClick={()=>{AddMesh(new THREE.TetrahedronGeometry())}}>Tetrahedron</Button>
        <Button onClick={()=>{AddMesh(new THREE.LatheGeometry())}}>Lathe</Button>
        <Button onClick={()=>{AddMesh(new THREE.RingGeometry())}}>Ring</Button>
        <Button onClick={()=>{AddMesh(new THREE.TorusGeometry())}}>Torus</Button>
        <Button onClick={()=>{AddMesh(new THREE.TorusKnotGeometry())}}>TorusKnot</Button>
        <Button onClick={()=>{AddMesh(new THREE.TubeGeometry())}}>Tube</Button>
    </div>
    <div class="col">
        <div class="category">Light</div>
        <Button onClick={()=>{AddLight(new THREE.AmbientLight())}}>Ambient</Button>
        <Button onClick={()=>{AddLight(new THREE.DirectionalLight())}}>Directional</Button>
        <Button onClick={()=>{AddLight(new THREE.HemisphereLight())}}>Hemisphere</Button>
        <Button onClick={()=>{AddLight(new THREE.PointLight())}}>Point</Button>
        <Button onClick={()=>{AddLight(new THREE.SpotLight())}}>Spot</Button>
    </div>
    <div class="col">
        <div class="category">Camera</div>
        <Button onClick={AddOrthographicCamera}>Orthographic</Button>
        <Button onClick={AddPerspectiveCamera}>Perspective</Button>
    </div>
</Popup>

<style>
    .col {
        display: flex;
        flex-direction: column;
        min-width: 100px;
    }
    .category {
        padding: 4px 8px;
        font-size: 11px;
        color: #555;
    }
</style>
