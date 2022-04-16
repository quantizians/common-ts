<div align="center">

# @quantiz/common

[![npm.badge]][npm] [![codecov.badge]][codecov] [![bundlephobia.badge]][bundlephobia] [![semantic-release.badge]][semantic-release] [![MIT][license.badge]][license]

[![actions.ci.badge]][actions.ci] [![actions.release.badge]][actions.release]

[![tweet]][tweet.url]

Common typescript utility types and functions

</div>

## Table of Contents

<details open>
  <summary>Show / hide</summary>

- [@quantiz/common](#quantizcommon)
  - [Table of Contents](#table-of-contents)
  - [Changelog](#changelog)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Documentation](#documentation)
  - [Contributing](#contributing)

</details>

## Changelog

See [CHANGELOG.md][changelog]

## Installation

```bash
npm install -D @quantiz/common
yarn add -D @quantiz/common
pnpm install -D @quantiz/common
```

## Usage

<details open>
  <summary>How to import: show / hide</summary>

```typescript
// import types
import type {
  RecursivePartial,
  Merge,
  DeepObject
} from '@quantiz/common';

// all importable units are exposed in root

import { casify } from '@quantiz/common';

// you can also import from subdirectory for better code splitting
import { casify } from '@quantiz/common/utils';
import { casify } from '@quantiz/common/utils/casify';
```

</details>

## Documentation

See [Documentation Page][api.docs]

## Contributing

[Read Contribution Guide][contributing]

<br />
<div align="center">

<!-- [![tweet]][tweet.url] -->

</div>

<p align="center">
  <a href="https://www.buymeacoffee.com/vnphanquang" target="_blank">
    <img
      src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
      height="60"
      width="217"
      alt="buy vnphanquang a coffee"
    />
  </a>
</p>

[codecov.badge]: https://codecov.io/github/quantizians/common-ts/coverage.svg?branch=main
[codecov]: https://codecov.io/github/quantizians/common-ts?branch=main

[license.badge]: https://img.shields.io/badge/license-MIT-blue.svg
[license]: ./LICENSE

[npm.badge]: https://img.shields.io/npm/v/@quantiz/common
[npm]: https://www.npmjs.com/package/@quantiz/common

[bundlephobia.badge]: https://img.shields.io/bundlephobia/minzip/@quantiz/common?label=minzipped
[bundlephobia]: https://bundlephobia.com/package/@quantiz/common

[semantic-release]: https://github.com/semantic-release/semantic-release
[semantic-release.badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg

[actions.ci.badge]: https://github.com/quantizians/common-ts/actions/workflows/ci.yaml/badge.svg
[actions.ci]: https://github.com/quantizians/common-ts/actions/workflows/ci.yaml

[actions.release.badge]: https://github.com/quantizians/common-ts/actions/workflows/release.yaml/badge.svg
[actions.release]: https://github.com/quantizians/common-ts/actions/workflows/release.yaml

[contributing]: ./CONTRIBUTING.md
[changelog]: ./CHANGELOG.md
[api.docs]: ./api/docs/index.md

[tweet]: https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2quantizians%2Fcommon-ts
[tweet.url]: https://twitter.com/intent/tweet?text=%40quantiz%2Fcommon%20-%20Common%20typescript%20utility%20types%20and%20functions%0A%0Ahttps%3A%2F%2Fgithub.com%2Fquantizians%2Fcommon-ts
