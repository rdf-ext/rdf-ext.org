# APIs @rdfjs-base

## BaseFormats

```webidl
interface BaseFormats {
  readonly attribute SinkMap parsers;
  readonly attribute SinkMap serializers;
};
```

## DataModel

The [@rdfjs/data-model](https://github.com/rdfjs-base/data-model) package implements the [RDF/JS: Data model specification](http://rdf.js.org/data-model-spec/).
See the specification for more details.

## DataModelFactory

## Dataset

The [@rdfjs/dataset](https://github.com/rdfjs-base/data-model) package implements the [RDF/JS: Dataset specification](https://rdf.js.org/dataset-spec/).
See the specification for more details.

## DatasetFactory

## Environment

```webidl
[Constructor(iterable<Factory> factories)]
interface Environment {
  Environment clone();
};
```

## Factory

```webidl
interface Factory {
  clone(Environment newEnvironment);
  init();
};
```

## Fetch

## FetchFactory

```webidl
interface FetchFactory {
  [NewObject] Promise<Response> fetch(RequestInfo input, optional RequestInit init = {});
};
```

## Formats

```webidl
interface Formats extends BaseFormats {
  undefined import(BaseFormats)
};
```

## FormatsFactory

```webidl
interface FormatsFactory {
  readonly attribute Formats formats;
};
```

## Namespace

```webidl
NamedNode Namespace(String path);
```

## NamespaceFactory

```webidl
interface FormatsFactory {
  Namespace namespace(String or NamedNode baseIRI);
};
```

## SinkMap

```webidl
interface SinkMap extends Map {
};
```

## TermMap

```webidl
interface TermMap extends Map {
};
```

## TermMapFactory

```webidl
interface TermMapFactory {
  TermMap termMap();
};
```

## TermSet

```webidl
interface TermSet extends Set {
};
```

## TermSetFactory

```webidl
interface TermSetFactory {
  TermSet termSet();
};
```

## Traverser

```webidl
interface Traverser {
  undefined forEach ({ term, dataset }, callback);
  DatasetCore match ({ term, dataset });
  any reduce ({ term, dataset }, callback, initialValue);
};
```

## TraverserFactory

```webidl
interface TraverserFactory {
  Traverser traverser();
};
```
