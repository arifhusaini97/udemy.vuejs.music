import { createApp } from 'vue';
// import { ValidationProvider } from 'vee-validate';
import VeeValidatePlugin from './includes/validation';
import App from './App.vue';
import router from './router';
import store from './store';
import Icon from './directives/icon';
import './assets/tailwind.css';
import './assets/main.css';
import { auth } from './includes/firebase';

let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    app.use(store);
    app.use(router);
    app.use(VeeValidatePlugin);
    app.directive('icon', Icon);
    app.mount('#app');
  }
});
