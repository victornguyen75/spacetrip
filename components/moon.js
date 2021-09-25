import * as THREE from "three";

const moonTexture = new THREE.TextureLoader().load("../img/moon.jpg");
const normalTexture = new THREE.TextureLoader().load("../img/normal.jpg");

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshPhongMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);

moon.position.z = 30;
moon.position.setX(-10);

export { moon };
