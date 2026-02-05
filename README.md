# Workflows

A collection of reusable GitHub Actions workflows for projects.

## Included Workflows

- [`autofix`](./.github/workflows/autofix.yml): Automatically fixes code formatting for pull requests
- [`deploy-github-pages`](./.github/workflows/deploy-github-pages.yml): Deploy to Github Pages
- [`deploy-vercel`](./.github/workflows/deploy-vercel.yml): Deploy to Vercel ans create comment
- [`publish-commit`](./.github/workflows/publish-commit.yml): Preview release without publishing anything to NPM
- [`release`](./.github/workflows/release.yml): Generate github changelog and publishes releases to npm
- [`test`](./.github/workflows/test.yml): Runs tests and reports coverage

## Actions

- [`setup-environment`](./setup-environment/action.yml): Setup environment and install dependencies

## Usage

To use action and workflow, reference it in your project’s `.github/workflows/*.yml`:

```yaml
# workflow
name: Release

uses: tzuyi0817/workflows/.github/workflows/release.yml@v1
```

```yaml
# action
name: Setup environment

uses: tzuyi0817/workflows/setup-environment@v1
```
