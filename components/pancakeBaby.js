import * as THREE from "three";

const pancakeBabyTexture = new THREE.TextureLoader().load(
  "../img/pancakeBaby.jpg"
);

const pancakeBaby = new THREE.Mesh(
  new THREE.BoxGeometry(200, 200, 1),
  new THREE.MeshStandardMaterial({
    map: pancakeBabyTexture,
  })
);
pancakeBaby.position.set(0, 30, -100);

export { pancakeBaby };
