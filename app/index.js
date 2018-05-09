import scene from './scene'
import {camera} from './camera'
import lights from './lights'
import renderer from './renderer'
import helpers from './helpers'

const light = lights(scene)
helpers({light, scene})

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
