import * as THREE from "three";

const penguin2Texture = new THREE.TextureLoader().load("../img/penguin2.jpg");

const penguin2 = new THREE.Mesh(
  new THREE.BoxGeometry(200, 200, 1),
  new THREE.MeshStandardMaterial({
    map: penguin2Texture,
  })
);
penguin2.position.set(0, 0, 100);

export { penguin2 };
