import * as THREE from "three";

const bugTexture = new THREE.TextureLoader().load("../img/bug.jpg");

const bug = new THREE.Mesh(
  new THREE.BoxGeometry(7, 7, 7),
  new THREE.MeshStandardMaterial({
    map: bugTexture,
  })
);

export { bug };
