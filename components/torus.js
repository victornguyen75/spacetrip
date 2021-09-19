import * as THREE from "three";

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshPhongMaterial({
  color: 0xa5d6a7,
});
const torus = new THREE.Mesh(geometry, material);

export { torus };
