import * as THREE from "three";

const penguinTexture = new THREE.TextureLoader().load("../img/penguin.jpg");

const penguin = new THREE.Mesh(
  new THREE.SphereGeometry(30, 32, 32),
  new THREE.MeshPhongMaterial({
    map: penguinTexture,
  })
);

penguin.position.set(-100, 20, 0);

export { penguin };
