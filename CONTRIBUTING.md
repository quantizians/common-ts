# Contributing to [@quantiz/common][repo]

Thank you for stopping by. [@quantiz/common][repo] welcomes and appreciates your contribution

## Reporting Issues

Before opening a new issue, [first search for existing issues][repo.issues] to avoid duplications.

When you start working on an issue, make sure you are asked to be assigned to it.

### Bug Report

Please include as much details as possible:

- steps to reproduce,
- a github repo that has enough setup to reproduce the bug would be nice,
- screenshots.

### Feature Request

If you have an idea and don't know where to start yet, consider [opening a discussion][repo.discussions] first.

If you have a PR ready as your proposed implementation, you can [create an issue][repo.issues] and a PR that references it.

## Pull Requests

Each pull request should [reference an open issue][repo.issues.open] unless the change is very something simple such as a typo.

## Consistent Code Style

1. Commit message should follow the [Conventional Commits specification][conventionalcommits], this will enable [semantic-release][semanticrelease] to automate the workflow properly.
2. Code should be formatted with [prettier] and linted with [eslint]. They are already integrated into the codebase. See [package.json] for relevant scripts. There might also exist extensions for your editor that further enhance the experience with these tools.
    - [VS Code Prettier][vscode.extension.prettier]
    - [VS Code Eslint][vscode.extension.eslint]

## Development Setup

This repo uses [pnpm]. After forking and/or cloning the repo, a typical workflow is

```bash
pnpm install

pnpm prebuild # run eslint & prettier manually

pnpm build

pnpm test
```

See [package.json] for more details

[repo]: https://github.com/quantizians/common-ts
[repo.issues]: https://github.com/quantizians/common-ts/issues?q=
[repo.issues.open]: https://github.com/quantizians/common-ts/issues?q=is%3Aissue+is%3Aopen
[repo.discussions]: https://github.com/quantizians/common-ts/discussions
[conventionalcommits]: https://www.conventionalcommits.org/en/v1.0.0/
[semanticrelease]: https://github.com/semantic-release/semantic-release
[prettier]: https://prettier.io/
[eslint]: https://eslint.org/
[package.json]: ./package.json
[vscode.extension.prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[vscode.extension.eslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[pnpm]: https://pnpm.io/
