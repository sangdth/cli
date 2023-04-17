# 💻 Your Project CLI

The CLI starter for development.

### Getting started

```bash
npx tiged sangdth/cli your-project
```

### Release

NOTE: Remember to set your tokens. Check file `.github/workflows/release.yaml` for more information.

We use `changeset` to do release. After changing, make a new release with:

```bash
npx changeset
```

then follow the instructions. Make the PR, push the changes, changeset will pick it up and do the `publish` when the PR merge back to master branch.

## Usage:

```bash
npm i -g your-project
```

### Start dev servers:

```bash
your-project dev
```

### Stop dev servers:

```bash
your-project down
```

## Contributing

TODO
