import * as THREE from "three";

const gumbyTexture = new THREE.TextureLoader().load("../img/gumby.jpg");
const normalTexture = new THREE.TextureLoader().load("../img/normal.jpg");

const gumby = new THREE.Mesh(
  new THREE.BoxGeometry(7, 7, 7),
  new THREE.MeshStandardMaterial({
    map: gumbyTexture,
    normalMap: normalTexture,
  })
);

gumby.position.set(0, 3, 0);
export { gumby };
