import * as THREE from "three";

const penguin2Texture = new THREE.TextureLoader().load("../img/penguin2.jpg");

const penguin2 = new THREE.Mesh(
  new THREE.BoxGeometry(400, 400, 1),
  new THREE.MeshPhongMaterial({
    map: penguin2Texture,
  })
);
penguin2.position.set(0, 0, 100);

export { penguin2 };
