import * as THREE from 'three'
import createOrbitControls from 'three-orbit-controls'

const OrbitControls = createOrbitControls(THREE)

export const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
export const controls = new OrbitControls(camera)

camera.position.set(3, 6, 18)
controls.update()
