import * as THREE from "three";

const lightHelper = (pointLight) => new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);

export { lightHelper, gridHelper };
