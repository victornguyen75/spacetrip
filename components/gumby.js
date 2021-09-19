import * as THREE from "three";

const gumbyTexture = new THREE.TextureLoader().load("../img/gumby.jpg");
const normalTexture = new THREE.TextureLoader().load("../img/normal.jpg");

const gumby = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshStandardMaterial({
    map: gumbyTexture,
    normalMap: normalTexture,
  })
);

export { gumby };
