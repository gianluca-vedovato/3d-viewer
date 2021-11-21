import './style.css'
import Viewer from './Viewer'

const app = document.querySelector<HTMLDivElement>('#app')!


app.innerHTML = `
<div class="container"><canvas></canvas></div>
`

const test = () => {
  console.log('callback')
}
const viewer: Viewer = new Viewer({
  el: '.container',
  onReady: test,
  scene: {
    background: 0xffffff,
    fog: {
      color: 0xffffff,
      near: 10,
      far: 50
    }
  },
  models: [
    {
      path: '/gaming_chair_kiiro/scene.gltf',
      name: 'Chair',
      position: {
        y: 0
      }
    }
  ]
})

console.log(viewer)
