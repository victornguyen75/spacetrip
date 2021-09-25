import * as THREE from "three";

const gorillaTexture = new THREE.TextureLoader().load("../img/gorilla.jpg");

const gorilla = new THREE.Mesh(
  new THREE.BoxGeometry(20, 50, 20),
  new THREE.MeshPhongMaterial({
    map: gorillaTexture,
  })
);
gorilla.position.set(120, 45, -30);
gorilla.rotation.x = 12;

export { gorilla };
