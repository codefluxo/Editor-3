import './app.css'
import App from './App.svelte'
import { Project } from './lib/Project'


Project.current = new Project()

const app = new App({
  target: document.getElementById('app')!,
})

export default app
