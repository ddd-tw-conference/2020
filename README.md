# 2020 DDD Conference Event Page

## Development

Requirements:

- [node@^14.10.1](https://nodejs.org/)
- [yarn@^1.22.5](https://yarnpkg.com/)

Install the dependencies to develop:

```sh
yarn
```

and start development:

```sh
yarn develop
```

For more information, check out the [Gatsby](https://www.gatsbyjs.com/) official site.

Once you complete the changes, use this command instead of `git commit`:

```sh
yarn cz
```

More about [commitlint](https://github.com/conventional-changelog/commitlint).

You can build the distribution with:

```sh
yarn build
```

## Environment Variables

### ALLOW_ROBOTS

- Default: `undefined`

Set to `'true'` to allow web crawler crawl the site.

### SITE_URL

- Default: `pkg.homepage`(`'https://ddd-tw.com'`)

Depends on where to deploy. This is required.
