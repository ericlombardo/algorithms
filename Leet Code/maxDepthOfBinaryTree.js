var maxDepth = function(root) {
  if (root === null) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

// Used benjaminhoffman's dicussion post to figure out how to navigate through each branch with recurssion