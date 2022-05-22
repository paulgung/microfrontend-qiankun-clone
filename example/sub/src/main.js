import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let app;
let render = () => {
  app = new Vue({
    render: (h) => h(App),
  })
  app.$mount('#app')
}

/**
 * The bootstrap will only be called once when the child application is initialized.
 * The next time the child application re-enters, the mount hook will be called directly, and bootstrap will not be triggered repeatedly.
 * Usually we can do some initialization of global variables here,
 * such as application-level caches that will not be destroyed during the unmount phase.
 */
export async function bootstrap() {
  console.log('vue1 app bootstraped');
}

/**
 * The mount method is called every time the application enters,
 * usually we trigger the application's rendering method here.
 */
export async function mount() {
  render();
}

/**
 * Methods that are called each time the application is switched/unloaded,
 * usually in this case we uninstall the application instance of the subapplication.
 */
export async function unmount() {
  app.$destroy()
}


