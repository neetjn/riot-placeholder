# riot-placeholder

[![build](https://travis-ci.org/neetjn/riot-placeholder.svg?branch=master)](https://travis-ci.org/neetjn/riot-placeholder/)
[![npm version](https://badge.fury.io/js/riot-placeholder.svg)](https://badge.fury.io/js/riot-placeholder)
[![codecov](https://codecov.io/gh/neetjn/riot-placeholder/branch/master/graph/badge.svg)](https://codecov.io/gh/neetjn/riot-placeholder)

[![NPM](https://nodei.co/npm/riot-placeholder.png)](https://nodei.co/npm/riot-placeholder/)

Riot.js tag for generating placeholder text and images.

## About

**riot-placeholder** is a simple riot tag used for scaffholding and prototyping riot.js based websites and applications.

This tag doesn't depend on any css frameworks, and was built with [foobar-ipsum](https://github.com/neetjn/foobar-ipsum).

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

This tag takes a total of 3 conditional opts:

> **`*...`** ; `string` : ...

Once available, **riot-placeholder** can be used like so:

```html
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <h1 data-is="ph"></h1>
    </div>
    <div class="col-md-6">
      <img data-is="ph" height="100" width="100" />
    </div>
  </div>
  <hr />
  <div class="row">
    <div class="col-md-12">
      <span data-is="ph" unit="sentence" size="lg"></span>
    </div>
  </div>
  <hr />
  <div class="row">
    <div class="col-md-12">
      <p data-is="ph" loading></p>
    </div>
  </div>
</div>
```

### Contributors

* **John Nolette** (john@neetgroup.net)

Contributing guidelines are as follows,

* Any new features must include either unit test.
  * Branches for bugs and features should be structured like so, `issue-x-username`.
* Before putting in a pull request, be sure to verify you've built all your changes.
* Include your name and email in the contributors list.

---
Copyright (c) 2017 John Nolette Licensed under the MIT license.
