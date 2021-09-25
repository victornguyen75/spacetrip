import * as THREE from "three";

const dogTexture = new THREE.TextureLoader().load("../img/dog.jpg");

const dog = new THREE.Mesh(
  new THREE.CylinderGeometry(23, 5, 50),
  new THREE.MeshStandardMaterial({
    map: dogTexture,
  })
);
dog.position.set(-45, -75, -19);
dog.rotation.x = 20;
export { dog };
