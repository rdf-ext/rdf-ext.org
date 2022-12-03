# APIs RDF-Ext

The `rdf-ext` package exports an [Environment](base.html#environment) that supports the following factories:

- [DataFactoryExt](#datafactoryext)
- [DatasetFactoryExt](#datasetfactoryext)
- [FetchFactory](base.html#fetchfactory)
- [FormatsFactory](base.html#formatsfactory)
- [NamespaceFactory]()
- PrefixMapFactory
- [TermMapFactory](base.html#termmapfactory)
- [TermSetFactory](base.html#termsetfactory)

The following factories have experimental status:

- ScoreFactory
- [ClownfaceFactory]()
- [TraverserFactory](base.html#traverserfactory)

## Data Model

### TermExt

```webidl
[Exposed=(Window,Worker)]
interface TermExt : Term {
  DOMString toCanonical();
};
```

### NamedNodeExt

```webidl
[Exposed=(Window,Worker)]
interface NamedNodeExt : TermExt {
  attribute DOMString termType;
  attribute DOMString value;
  boolean equals(optional Term? other);
  DOMString toCanonical();
};
```

### BlankNodeExt

```webidl
[Exposed=(Window,Worker)]
interface BlankNodeExt : TermExt {
  attribute DOMString termType;
  attribute DOMString value;
  boolean equals(optional Term? other);
  DOMString toCanonical();
};
```

### LiteralExt

```webidl
[Exposed=(Window,Worker)]
interface LiteralExt : TermExt {
  attribute DOMString termType;
  attribute DOMString value;
  attribute DOMString language;
  attribute NamedNode datatype;
  boolean equals(optional Term? other);
  DOMString toCanonical();
};
```

### VariableExt

```webidl
[Exposed=(Window,Worker)]
interface VariableExt : TermExt {
  attribute DOMString termType;
  attribute DOMString value;
  boolean equals(optional Term? other);
  DOMString toCanonical();
};
```

### DefaultGraphExt

```webidl
[Exposed=(Window,Worker)]
interface DefaultGraphExt : TermExt {
  attribute DOMString termType;
  attribute DOMString value;
  boolean equals(optional Term? other);
  DOMString toCanonical();
};
```

### QuadExt

```webidl
[Exposed=(Window,Worker)]
interface QuadExt : TermExt {
  attribute DOMString termType;
  attribute DOMString value;
  attribute Term subject;
  attribute Term predicate;
  attribute Term _object;
  attribute Term graph;
  boolean equals(optional Quad? other);
  DOMString toCanonical();
};
```

### DataFactoryExt

```webidl
[Exposed=(Window,Worker)]
interface DataFactoryExt {
  NamedNodeExt namedNode(DOMString value);
  BlankNodeExt blankNode(optional DOMString value);
  LiteralExt literal(DOMString value, optional (DOMString or NamedNode) languageOrDatatype);
  VariableExt variable(DOMString value);
  DefaultGraphExt defaultGraph();
  QuadExt quad(TermExt subject, TermExt predicate, TermExt _object, optional TermExt? graph);
  TermExt fromTerm(Term original);
  QuadExt fromQuad(Quad original);
};
```

## Dataset

### DatasetExt

```webidl
interface DatasetExt : DatasetCore {
  DatasetExt addAll((Dataset or sequence<Quad>) quads);
  DatasetExt clone();
  DatasetExt deleteMatches(optional TermExt subject, optional TermExt predicate, optional TermExt _object, optional TermExt graph);
  DatasetExt difference(DatasetExt other);
  boolean equals(DatasetExt other);
  boolean every(QuadFilterIteratee iteratee);
  DatasetExt filter(QuadFilterIteratee iteratee);
  void forEach(QuadRunIteratee iteratee);
  Promise<DatasetExt> import(Stream stream);
  DatasetExt intersection(DatasetExt other);
  DatasetExt map(QuadMapIteratee iteratee);
  DatasetExt merge(DatasetExt other);
  boolean some(QuadFilterIteratee iteratee);
  String toCanonical();
  Stream toStream();
  String toString();
};
```

### DatasetFactoryExt

```webidl
interface DatasetFactoryExt : DataFactoryCore {
  DatasetExt dataset(optional (Dataset or sequence<Quad>) quads);
};
```

### QuadExtFilterIteratee

```webidl
interface QuadExtFilterIteratee {
  boolean test(QuadExt quad, DatasetExt dataset);
};
```

### QuadExtMapIteratee

```webidl
interface QuadExtMapIteratee {
  Quad map(QuadExt quad, DatasetExt dataset);
};
```

### QuadExtRunIteratee

```webidl
interface QuadExtRunIteratee {
  void run(QuadExt quad, DatasetExt dataset);
};
```

## Fetch

## Namespace

### Namespace

```webidl
NamedNodeExt NamespaceExt(String path);
```

### NamespaceFactory

```webidl
interface NamespaceFactory {
  NamespaceExt namespace(String or NamedNode baseIRI);
};
```

## PrefixMap

## Clownface

**Status:** unstable

## Traverser

**Status:** unstable
