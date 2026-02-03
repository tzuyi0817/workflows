# Workflows

A collection of reusable GitHub Actions workflows for projects.

## Included Workflows

- [`release`](./.github/workflows/release.yml): Generate github changelog and publishes releases to npm
- [`test`](./.github/workflows/test.yml): Runs tests and reports coverage
- [`deploy-vercel`](./.github/workflows/deploy-vercel.yml): Deploy to Vercel ans create comment
- [`deploy-github-pages`](./.github/workflows/deploy-github-pages.yml): Deploy to Github Pages

## Actions

- [`setup-environment`](./setup-environment/action.yml): Setup environment and install dependencies

## Usage

To use action and workflow, reference it in your project’s `.github/workflows/*.yml`:

```yaml
# workflow
name: release

uses: tzuyi0817/workflows/.github/workflows/release.yml@v1
```

```yaml
# action
name: setup environment

uses: tzuyi0817/workflows/setup-environment@v1
```
