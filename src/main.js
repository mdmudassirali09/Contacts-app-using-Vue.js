import { createApp } from 'vue'
import App from './App.vue'
import Details from './components/Details.vue'
import Create from './components/Create.vue'

const app = createApp(App);
app.component('detail', Details);
app.component('create', Create);
app.mount('#app')