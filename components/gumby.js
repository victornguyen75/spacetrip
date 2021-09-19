import * as THREE from "three";

const gumbyTexture = new THREE.TextureLoader().load("./img/gumby.jpg");

const gumby = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: gumbyTexture })
);

export { gumby };
