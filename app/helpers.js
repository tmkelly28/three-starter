import {HemisphereLightHelper, AxesHelper} from 'three'

export default ({light, scene}) => {
  const lightHelper = new HemisphereLightHelper(light, 5)
  scene.add(lightHelper)

  const axisHelper = new AxesHelper(100)
  scene.add(axisHelper)
}
