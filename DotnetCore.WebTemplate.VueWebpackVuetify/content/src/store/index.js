import 'babel-polyfill';
import Vue from 'vue';
import Vuex from 'vuex';

import { state } from './state';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

Vue.use(Vuex);

// Set vue store
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default store;
