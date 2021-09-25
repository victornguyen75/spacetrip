import * as THREE from "three";

const deepFriedPenguinTexture = new THREE.TextureLoader().load(
  "../img/deepFriedPenguin.jpg"
);

const deepFriedPenguin = new THREE.Mesh(
  new THREE.SphereGeometry(10, 32, 32),
  new THREE.MeshStandardMaterial({
    map: deepFriedPenguinTexture,
  })
);
deepFriedPenguin.position.set(-15, -45, 27);

export { deepFriedPenguin };
