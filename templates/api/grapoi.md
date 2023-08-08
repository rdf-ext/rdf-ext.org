# Grapoi

Grapoi combines the concept of graph pointers and paths.
The `Grapoi` class is based on the `PathList` class.
A `PathList` wraps multiple `Path` objects in the `ptrs` property and adds some convenience methods.
`PathList` and `Grapoi` have almost the same interface, besides a stricter type interface for `PathList`.
That makes code written with `PathList` slightly faster; `Grapoi` code is, on the other hand, a bit more readable.  

## Interfaces

### GraphPointer 

A `GraphPointer` refers to a term in a dataset and optional also a specific graph:

```webidl
interface GraphPointer {
  attribute Term term;
  attribute Dataset dataset;
  attribute Term? graph;
};
```

### Path

A `Path` is, in the simplest case, just a [GraphPointer](#graphpointer), but it can also describe a path over multiple edges in a dataset:

```webidl
interface Path {
  attribute Dataset dataset;
  attribute Term? term;
  attribute Term? graph;
  attribute sequence<Edge> edges;
};
```

### Edge

An `Edge` describes one traversing step in a dataset with a quad and the start and end.
The start and end are strings with the according property name of the quad, like `subject` or `predicate`:

```webidl
interface Edge {
  attribute Dataset dataset;
  attribute Quad quad;
  attribute DOMString start;
  attribute DOMString end;
};
```

## Example

The following example is based on the [housemd](https://github.com/rdf-ext/housemd) dataset and shows the path and pointer functionality of Grapoi:

```javascript
import housemd from 'housemd'
import rdf from 'rdf-ext'

const ns = {
  schema: rdf.namespace('http://schema.org/')
}

const dataset = rdf.dataset(housemd({ factory: rdf }))
const house = rdf.grapoi({ dataset, term: 'Gregory' }).in().trim()

console.log('properties of the guy named Gregory:')

for (const quad of house.out().quads()) {
  console.log(`\t${quad.predicate.value}: ${quad.object.value}`)
}

const nationalities = house
  .out(ns.schema.knows)
  .out(ns.schema.nationality)
  .distinct()

console.log('nationalities of all known people:')

for (const value of nationalities.values) {
  console.log(`\t${value}`)
}
```

## JSDoc

@[import{Grapoi ⇐ [<code>PathList</code>](#PathList),deep,depth=+1}](../../.build/grapoi.md)
@[import{PathList,deep,depth=+1}](../../.build/grapoi.md)
