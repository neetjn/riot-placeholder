# riot-placeholder

[![build](https://travis-ci.org/neetjn/riot-placeholder.svg?branch=master)](https://travis-ci.org/neetjn/riot-placeholder/)
[![npm version](https://badge.fury.io/js/riot-placeholder.svg)](https://badge.fury.io/js/riot-placeholder)
[![codecov](https://codecov.io/gh/neetjn/riot-placeholder/branch/master/graph/badge.svg)](https://codecov.io/gh/neetjn/riot-placeholder)

[![NPM](https://nodei.co/npm/riot-placeholder.png)](https://nodei.co/npm/riot-placeholder/)

Riot.js plugin for generating placeholder text.

## About

**riot-placeholder** is a simple riot tag used for scaffolding and prototyping riot.js based websites and applications.

This tag was built with [foobar-ipsum](https://github.com/neetjn/foobar-ipsum).

### Examples

* https://jsfiddle.net/neetjn/mhdLnund/

## Usage

To install via NPM:

```bash
npm install riot-placeholder
```

For a quick start using jsdelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/riot-placeholder/dist/riot-placeholder.js"></script>
```

Once available, **riot-placeholder** can be used like so:

```js
import riot from 'riot'
import placeholder from 'riot-placeholder'

placeholder(riot)

console.log(`John said "${riot.placeholder.word()}" I tell you!`)
```

```html
<h1 data-is="ph"></h1>
<!-- override default unit (word, sentence, paragraph) -->
<!-- override default size (md) -->
<span data-is="ph" unit="sentence" size="lg"></span>
<p data-is="ph"></p>
```

The tag takes two configurable `opts`:

> **`unit`**: Unit for generator to target.

By default, the tag will automatically determine the unit depending on the target node.

* *word*: `h1`, `h2`, `h3`, `h4`, `h5`
* *sentence*: `span`
* *paragraph*: `p`

> **`size`**: Size of the generated content (`sm`, `md`, `lg`).

### Contributors

* **John Nolette** (john@neetgroup.net)

Contributing guidelines are as follows,

* Any new features must include a unit test.
  * Branches for bugs and features should be structured like so, `issue-x-username`.
* Before putting in a pull request, be sure to verify you've built all your changes.
* Include your name and email in the contributors list.

---
Copyright (c) 2017 John Nolette Licensed under the MIT license.
