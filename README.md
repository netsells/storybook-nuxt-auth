# @netsells/storybook-nuxt-auth

This package provides an easy and convenient way to mock your nuxt auth state in your stories.

## Installation

```sh
$ yarn add -D @netsells/storybook-nuxt-auth
``` 

## Usage

### Setup

Provide the decorator in your storybook decorators config:

```js
import withNuxtAuth from '@netsells/storybook-nuxt-auth';

export default [
    withNuxtAuth,
];
```

### Stories

To mock a specific auth config in your stories, you can simply provide the `auth` parameter with your desired data:

```js
export default {
    parameters: {
        auth: {
            loggedIn: true,
            user: {
                first_name: 'Jane',
                last_name: 'Smith',
                email: 'jane.smith@example.com',
            },
        },
    },
};
```

You can also provide auth data to specific stories if required:

```js
story.parameters = {
    auth: {
        loggedIn: true,
        user: {
            first_name: 'Jane',
            last_name: 'Doe',
            email: 'jane.doe@example.com',
        },
    },
};
```

You can add any data here that you would expect to see in the actual `$auth` object provided by `@nuxtjs/auth` in your nuxt application, including callbacks such as `login()` and `loginWith()` if you need to mock auth functionality.

This decorator will wrap your stories in a `NuxtAuth` component, which can be inspected in Vue Dev Tools to see the currently applied auth config.
