// import { userService } from '@/_services'
import { login, register, getAll, _delete, logout, getInfo } from '@/api/user'

const state = {
    all: {}
}

const actions = {
    reset({ commit }) {
        commit('RESET_STATE')
    },
    // user: state => state.user,
    getAll({ commit }) {
        commit('getAllRequest')

        getAll()
            .then(
                users => commit('getAllSuccess', users),
                error => commit('getAllFailure', error)
            )
    },

    delete({ commit }, id) {
        commit('deleteRequest', id)

        _delete(id)
            .then(
                user => commit('deleteSuccess', id),
                error => commit('deleteFailure', { id, error: error.toString() })
            )
    }
}

const mutations = {
    RESET_STATE: (state) => {
        state.all = {};
      },
    getAllRequest(state) {
        state.all = { loading: true };
    },
    getAllSuccess(state, users) {
        state.all = { items: users };
    },
    getAllFailure(state, error) {
        state.all = { error };
    },
    deleteRequest(state, id) {
        // add 'deleting:true' property to user being deleted
        state.all.items = state.all.items.map(user =>
            user.id === id
                ? { ...user, deleting: true }
                : user
        )
    },
    deleteSuccess(state, id) {
        // remove deleted user from state
        state.all.items = state.all.items.filter(user => user.id !== id)
    },
    deleteFailure(state, { id, error }) {
        // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
        state.all.items = state.items.map(user => {
            if (user.id === id) {
                // make copy of user without 'deleting:true' property
                const { deleting, ...userCopy } = user;
                // return copy of user with 'deleteError:[error]' property
                return { ...userCopy, deleteError: error };
            }

            return user;
        })
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
