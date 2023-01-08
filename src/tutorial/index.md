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
[webpack](https://webpack.js.org/) is a very popular one, which we will use in this tutorial. 

### Dependencies

First, you need to install webpack and the webpack cli.
The following command will install both and add them as a developer dependency:

```bash
npm install --save-dev webpack webpack-cli
```

### Bundle

Now you can run the bundler:

```bash
npx webpack ./examples/browser/fetch-resource.js --output-filename=fetch-resource.js
```

### Server

The repository contains a small Web server that hosts the examples.
You can use the launch configuration in VSCode/Gitpod to start it.
Or with the following command:  

```bash
node server.js 
```

Gitpod will automatically open a browser window.
On a local environment, open this link: [http://localhost:8080/](http://localhost:8080/) 
