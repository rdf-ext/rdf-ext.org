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
[Vite](https://vitejs.dev/) is a modern, fast, and very popular one, which we will use in this tutorial. 

### Dependencies

First, you need to install `vite`.
The following command will install it and add it as a developer dependency:

```bash
npm install --save-dev `vite`
```

### Bundle

Now you can run the bundler in developer mode.
It will start a server and bundles the code on the fly:

```bash
vite dev examples/browser
```

Run the following command for a production build:

```bash
vite build --outDir=../../dist examples/browser
```
