import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import Jabberwocky from '../icons/Jabberwocky.vue';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
    values: {
      jabberwocky: { // name of our custom icon
        component: Jabberwocky, // our custom component
      },
    },
  },
});
