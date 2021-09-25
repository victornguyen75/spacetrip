import * as THREE from "three";

const deepFriedDogTexture = new THREE.TextureLoader().load(
  "../img/deepFriedDog.jpg"
);

const deepFriedDog = new THREE.Mesh(
  new THREE.SphereGeometry(10, 32, 32),
  new THREE.MeshStandardMaterial({
    map: deepFriedDogTexture,
  })
);
deepFriedDog.position.set(15, 30, 27);

export { deepFriedDog };
