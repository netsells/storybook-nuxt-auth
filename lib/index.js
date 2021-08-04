import Vue from 'vue';

export default (story, { parameters }) => {
    Vue.prototype.$auth = {
        ...Vue.prototype.$auth || {},
        loggedIn: false,
    };

    if (parameters.auth) {
        Vue.prototype.$auth = {
            ...Vue.prototype.$auth || {},
            ...parameters.auth,
        };
    }

    return {
        name: 'nuxt-auth',

        template: '<story />',

        computed: {
            /**
             * Return the current auth config.
             *
             * @returns {object|undefined}
             */
            storyParameters() {
                return parameters.auth;
            },
        },
    };
};
