import * as THREE from "three";

const deepFriedDogTexture = new THREE.TextureLoader().load(
  "../img/deepFriedDog.jpg"
);

const deepFriedDog = new THREE.Mesh(
  new THREE.SphereGeometry(50, 32, 32),
  new THREE.MeshPhongMaterial({
    map: deepFriedDogTexture,
  })
);
deepFriedDog.position.set(100, 30, -250);

export { deepFriedDog };
