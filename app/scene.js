import {Scene, Color, Fog} from 'three'

const scene = new Scene()
scene.background = new Color(0x202020)
scene.fog = new Fog(0xcce0ff, 500, 10000)

export default scene
