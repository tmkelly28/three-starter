import {HemisphereLight} from 'three'

export default (scene) => {
  const light = new HemisphereLight(0xffffbb, 0x080820, 1)
  light.position.x = 0
  light.position.y = 100
  light.position.z = 0
  scene.add(light)
  return light
}
