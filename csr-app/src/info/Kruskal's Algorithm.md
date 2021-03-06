# Kruskal's Algorithm

Kruskal's Algorithm finds a minimum spanning tree of a graph.

What is a Minimum Spanning Tree?

1. A **Spanning tree** is a subgraph of G that has the same set of vertices as G and is also a tree.

2. The minimum spanning tree of the weighted graph G is the spanning tree G whose sum of edges is minimum.

## Note: There can be more than one minimum spanning tree in a graph

## Why should I care about minimum spanning trees?

1. Useful for constructing networks : How can I connect all of my nodes using the smallest amount of wire?

2. They are useful for clustering items into natural groups.

---

## Explanation

- Sort edges by (increasing) weight.

- Initially, each vertex is a solitary sub-graph (MST-component).

- Add the edges to the graph in ascending order if they do not form a cycle.

A heap can be used to extract the edges in ascending order.

A Disjoint Set can be used to determine if an edge would form a cycle.

Pseudocode:

```
Algorithm: Kruskal-MST (G)
Input: A Weighted Graph G=(V,E)

   Initialize MST to be empty;
   Place each vertex in its own set;
   add all edges G to a min heap;
   while the heap is not empty
       e = (u,v)
       if u and v are not in the same set
           Add e to MST;
           Compute the union of the two sets;
       endif
   endwhile
   return MST

Output: A minimum spanning tree for the graph G.
```

Time Complexity Analysis using an adjacency matrix to represent the graph:

- Placing edges in list requires scanning the adjacency matrix O(V2).
- Sorting edges: O(E log(E)).
- One union-find operation for each edge: O(E log(V)).
- Total: O(V2) + O(E log(E)) + O(E log(V))
  a) O(V2), for sparse graphs
  b) O(V2)log V, for dense graphs

Time Complexity Analysis using an adjacency list to represent the graph:

- When Placing edges in list, the algorithm scans each vertex list once. O(E) time.

- Total: O(E)+ O(E log(E)) + O(E log(V))
  a) O(E log(E))
  b) O(E log(V)) (same for sparse or dense)
