import * as THREE from 'three'
import createOrbitControls from 'three-orbit-controls'

// scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x202020)
scene.fog = new THREE.Fog(0xcce0ff, 500, 10000)

// camera/controls
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const OrbitControls = createOrbitControls(THREE)
const controls = new OrbitControls(camera)
camera.position.set(3, 6, 18)
controls.update()

const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1)
light.position.x = 0
light.position.y = 100
light.position.z = 0
const helper = new THREE.HemisphereLightHelper(light, 5)
scene.add(helper)
scene.add(light)

// renderer
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)

// helpers
const axisHelper = new THREE.AxesHelper(100)
scene.add(axisHelper)

// render
const render = () => {
  window.requestAnimationFrame(render)
  renderer.render(scene, camera)
}

// event listeners
const onResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

window.addEventListener('resize', onResize, false)

// main
render()
