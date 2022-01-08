---
sidebar: auto
---

# Tutorial

This tutorial will show you how to use RDF-Ext.

## Example Workspace

All examples of this tutorial are available as [Gitpod](https://gitpod.io/) workspace:

<open-in-gitpod repository="https://github.com/rdf-ext/rdf-ext-examples"/>

## Basics

Let's start with some basics.

### Example Dataset

We will use the [housemd](https://www.npmjs.com/package/housemd) example dataset in this tutorial.
The following lines show how to load it:

@[code js{1-8}](../../node_modules/rdf-ext-examples/examples/node/housemd-dataset.js)

### N-Triples

Converting Term, Quads, or Dataset to N-Triples string can be helpful for debugging.
The example shows how to do it:

@[code js{10-11}](../../node_modules/rdf-ext-examples/examples/node/housemd-dataset.js)

## Browser

A module bundler is required to build a Web application with RDF-Ext.
The most common one is [webpack](https://webpack.js.org/).
This part of the tutorial will show you how to build a simple Web application with webpack. 

### Dependencies

First, you need to install webpack and some browser polyfills.
The following command will install all of them and add them as a developer dependency:

```bash
npm install --save-dev buffer process readable-stream webpack webpack-cli
```

### Config

A configuration file for webpack is required to enable the polyfills.
If you use the filename `webpack.config.cjs`, webpack will find the file by itself.
The content should look like this:

@[code js](../../node_modules/rdf-ext-examples/webpack.config.cjs)

### Bundle

```bash
npx webpack ./examples/browser/fetch-resource.js --output-filename=fetch-resource.js
```
