import Vuex from 'vuex';
import _ from 'lodash';

import Request from '~/common/request';

const mapGlobals = (globals) => {
  const response = {};
  globals.forEach((global) => {
    response[global.slug] = global;
  });
  return response;
};

const mapPages = (pages) => {
  const response = {};
  pages.forEach((page) => {
    response[page.slug] = page;
    page.metafields.forEach((metafield) => {
      page[metafield.key] = metafield;
    });
  });
  return response;
}

const state = {
  globals : {
    head: {},
    footer: {},
    nav: {},
    social: {},
  },
  pages:{},
};

const getters = {
  getHead: (state) => {
    return state.globals.head
  },
  getFooter: (state) => {
    return state.globals.footer
  },
  getNav: (state) => {
      return state.globals.nav
  },
  getSocial: (state) => {
      return state.globals.social
  },
  getPage: (state) => {
    return (slug) => {
      return _.find(state.pages, page => page.slug === slug);
    }
  },
};

const mutations = {
  SET_HEAD : (state, payload) => {
    state.globals.head = payload
  },
  SET_NAV : (state, payload) => {
    state.globals.nav = payload
  },
  SET_SOCIAL : (state, payload) => {
    state.globals.social = payload
  },
  SET_FOOTER : (state, payload) => {
    state.globals.footer = payload
  },
  SET_PAGES: (state, payload) => {
    state.pages = payload;
  },
};

const actions = {
  nuxtServerInit: async (context,payload) => {
    const globalsResponse = await Request.getGlobals();
    const globals = globalsResponse.objects;
    const pagesResponse = await Request.getPages();
    const pages = pagesResponse.objects;
    if(pages) {
      const mappedPages = mapPages(pages);
      context.commit('SET_PAGES', mappedPages)
    }
    if(globals) {
      const mappedGlobals = mapGlobals(globals);
      context.commit('SET_HEAD' ,mappedGlobals.head.metadata)
      context.commit('SET_NAV' ,mappedGlobals.nav)
      context.commit('SET_SOCIAL',mappedGlobals.social.metadata)
      context.commit('SET_FOOTER',mappedGlobals.footer.metadata)
    }
  },
};

const createStore = () => {
  return new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
  });
};

export default createStore;
