import * as THREE from "three";

const dogTexture = new THREE.TextureLoader().load("../img/dog.jpg");

const dog = new THREE.Mesh(
  new THREE.CylinderGeometry(23, 5, 50),
  new THREE.MeshPhongMaterial({
    map: dogTexture,
  })
);

dog.position.set(-100, 15, -19);
dog.rotation.x = 20;

export { dog };
