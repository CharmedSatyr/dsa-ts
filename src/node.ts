/**
 * A simple node
 * Other properties could be assigned to track with potential
 * use cases, but this implementation is clean and useful in
 * many data structures. It might be modified in the future to
 * add properties like `next`.
 *
 * @class Node
 */
class Node {
  public data: any;
  constructor(data: any = null) {
    this.data = data;
  }
}

export default Node;
