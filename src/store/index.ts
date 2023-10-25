import {createStore} from 'vuex';

export default createStore({
  state: {
    sourceFolder: null,
    destinationFolder: null,
    proposedChanges: []
  },
  mutations: {
    SET_SOURCE_FOLDER(state, folder) {
      state.sourceFolder = folder;
    },
    SET_DESTINATION_FOLDER(state, folder) {
      state.destinationFolder = folder;
    },
    SET_PROPOSED_CHANGES(state, changes) {
      state.proposedChanges = changes;
    }
  },
  actions: {
    // Define your actions here
  }
});
