import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh, Object3D, CylinderGeometry, CircleGeometry, DodecahedronGeometry, IcosahedronGeometry, LatheGeometry, OctahedronGeometry, PlaneGeometry, RingGeometry, SphereGeometry, TetrahedronGeometry, TorusGeometry, TorusKnotGeometry, TubeGeometry, MeshStandardMaterial, MeshNormalMaterial, GridHelper, Vector3, BoxHelper, AxesHelper, Box3Helper, ArrowHelper, PlaneHelper, CameraHelper, Camera } from "three";
import { OrbitControls, TransformControls, ViewHelper } from "three/examples/jsm/Addons.js";
import { RemoveObject } from "./Utils";


/**
   * @todo Support Sprite
   * @todo Support Tube Geometry
   * @todo Material Wireframe
   */

export class Project {
    static current: Project

    scene: Scene;
    camera: PerspectiveCamera;
    renderer: WebGLRenderer;

    selectedObject: Object3D
    refreshObjectTree = () => { }
    refreshInspector = () => { }
    gridHelper: GridHelper;
    transformControls: TransformControls;
    orbitControls: OrbitControls;
    helpers: any;
    boxHelper: BoxHelper;
    cameraHelper: CameraHelper;

    constructor() {
        const scene = new Scene();
        scene.name = "Scene"
        const camera = new PerspectiveCamera(75, 1, 0.1, 1000);
        camera.name = "Camera"
        camera.position.x = 2
        camera.position.y = 3
        camera.position.z = 5
        camera.lookAt(0,0,0)

        const renderer = new WebGLRenderer({antialias:true, });
        renderer.setSize(300, 300);
        renderer.setAnimationLoop(animate);


        var helpers = new Object3D()
        helpers.name = "helpers"
        scene.add(helpers)

        const geometry = new BoxGeometry();
        const material = new MeshNormalMaterial();
        const cube = new Mesh(geometry, material);
        scene.add(cube);



        function animate() {

            renderer.render(scene, camera);

        }

        var gridHelper = new GridHelper(20,20)
        helpers.add(gridHelper)
        

        var orbitControls = new OrbitControls(camera, renderer.domElement)


        var transformControls = new TransformControls(camera, renderer.domElement)
        helpers.add(transformControls.getHelper())
        transformControls.addEventListener("change", ()=>{
            // this.refreshInspector()
            if (this.selectedObject instanceof Camera){
                cameraHelper.update()
            }
            else{
                boxHelper.update()
            }
        })
        transformControls.addEventListener("mouseDown", ()=>{
            orbitControls.enabled = false
        })
        transformControls.addEventListener("mouseUp", ()=>{
            orbitControls.enabled = true
        })

        var boxHelper = new BoxHelper(cube)
        boxHelper.visible = false
        helpers.add(boxHelper)

        var cameraHelper = new CameraHelper(camera)
        cameraHelper.visible = false
        helpers.add(cameraHelper)

        
        this.scene = scene
        this.camera = camera
        this.renderer = renderer

        this.selectedObject = scene

        this.helpers = helpers
        this.gridHelper = gridHelper
        this.boxHelper = boxHelper
        this.cameraHelper = cameraHelper

        this.orbitControls = orbitControls
        this.transformControls = transformControls

        window.addEventListener("keyup", ()=>{
            RemoveObject()
        })

    }

}