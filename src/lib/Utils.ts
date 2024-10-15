import { BoxGeometry, BufferGeometry, Camera, CapsuleGeometry, CircleGeometry, CylinderGeometry, DodecahedronGeometry, IcosahedronGeometry, LatheGeometry, Object3D, OctahedronGeometry, PlaneGeometry, RingGeometry, SphereGeometry, TetrahedronGeometry, TorusGeometry, TorusKnotGeometry, TubeGeometry } from "three";
import { Project } from "./Project";

export function ToTitleCase(label: string) {
    const result = label.replace(/([A-Z])/g, ' $1').trim();
    return result
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export function ToAny(obj: any) {
    return obj
}

export function GetGeometryClass(geom: BufferGeometry) {

    if (geom.type == "BoxGeometry") return BoxGeometry
    if (geom.type == "CapsuleGeometry") return CapsuleGeometry
    if (geom.type == "CircleGeometry") return CircleGeometry
    if (geom.type == "CylinderGeometry") return CylinderGeometry
    if (geom.type == "DodecahedronGeometry") return DodecahedronGeometry
    if (geom.type == "IcosahedronGeometry") return IcosahedronGeometry
    if (geom.type == "LatheGeometry") return LatheGeometry
    if (geom.type == "OctahedronGeometry") return OctahedronGeometry
    if (geom.type == "PlaneGeometry") return PlaneGeometry
    if (geom.type == "PlaneGeometry") return RingGeometry
    if (geom.type == "SphereGeometry") return SphereGeometry
    if (geom.type == "TetrahedronGeometry") return TetrahedronGeometry
    if (geom.type == "TorusGeometry") return TorusGeometry
    if (geom.type == "TorusKnotGeometry") return TorusKnotGeometry
    if (geom.type == "TubeGeometry") return TubeGeometry
}

export function SelectObject(obj: Object3D) {
    Project.current.selectedObject = obj;
    Project.current.transformControls.detach();
    Project.current.boxHelper.visible = false
    Project.current.cameraHelper.visible = false

    if (obj == Project.current.camera || obj == Project.current.scene) {
        Project.current.refreshObjectTree();
        Project.current.refreshInspector();
        return
    }
    Project.current.transformControls.attach(obj)

    if (obj instanceof Camera) {
        Project.current.cameraHelper.visible = true
        Project.current.cameraHelper.camera = obj
        Project.current.cameraHelper.update()
    }
    else {
        Project.current.boxHelper.visible = true
        Project.current.boxHelper.setFromObject(obj)
    }

    Project.current.refreshObjectTree();
    Project.current.refreshInspector();
}

export function RemoveObject(){
    var obj = Project.current.selectedObject
    if (obj == Project.current.camera || obj == Project.current.scene) {
        Project.current.refreshObjectTree();
        Project.current.refreshInspector();
        return
    }
    var parent = obj.parent
    if (parent){
        parent.remove(obj)
        SelectObject(parent)
    }
}