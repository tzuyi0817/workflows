# Workflows

A collection of reusable GitHub Actions workflows for projects.

## Included Workflows

- [`release`](./.github/workflows/release.yml): Generate github changelog and publishes releases to npm

- **Release**:

## Actions

- [`setup-environment`](./setup-environment/action.yml): Setup environment and install dependencies

## Usage

To use action and workflow, reference it in your project’s `.github/workflows/*.yml`:

```yaml
# action
name: setup environment

uses: tzuyi0817/workflows/setup-environment@v1
```

```yaml
# workflow
name: release

uses: tzuyi0817/workflows/.github/workflows/release.yml@v1
```
