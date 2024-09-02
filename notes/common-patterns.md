<h1>15 Common LeetCode Patterns</h1>

## 1. Prefix Sum

### When to Use

The prefix sum technique is useful when you need to quickly calculate the sum of elements in a sub-array. By precomputing an array of prefix sums, you can achieve constant time complexity for range sum queries.

### Concept

Given an array:

```txt
Array -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                   i        j
```

The prefix sum array is:

```txt
Prefix Sum -> [1, 3, 6, 10, 15, 21, 28, 36, 45, 55]

P[i] = A[0] + A[1] + ... + A[i]
SUM[i, j] = P[j] - P[i-1]
```

Sometimes, you can modify the original array to store prefix sums to save space.

### Code Example

```python
def create_prefix_sum(A):
    for i in range(1, len(A)):
        A[i] += A[i-1]
    return A
```

### Key Problems

- [303. Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/)
- [560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)
- [525. Contiguous Array](https://leetcode.com/problems/contiguous-array/)

---

## 2. Two Pointers

### When to Use

The two pointers technique is useful for problems involving searching pairs in a sorted array or linked list, finding palindromes, etc. It can often reduce the time complexity from O(n²) to O(n).

### Concept

Consider finding if a string is a palindrome:

```txt
" abcdcba "
  ^       ^
  i       j
```

### Code Example

```python
def is_palindrome(s):
    i, j = 0, len(s) - 1
    while i < j:
        if s[i] != s[j]:
            return False
        i += 1
        j -= 1
    return True
```

### Key Problems

- [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/)
- [15. 3Sum](https://leetcode.com/problems/3sum/)
- [167. Two Sum II - Input array is sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

---

## 3. Sliding Window

### When to Use

Sliding window techniques are often used when you need to find subarrays or substrings that meet certain criteria. It helps reduce time complexity by avoiding unnecessary re-computation.

### Concept

To find the subarray of size 'k' with the maximum sum:

```txt
[1, 3, -1, -3, 5, 3, 6, 7] k = 3
 ^  ^  ^  ^  ^  ^  ^  ^
 i  j
```

Brute force would consider all subarrays of size 'k', but a sliding window maintains a window of size 'k' and slides it to the right.

### Code Example

```python
def max_sum_subarray(A, k):
    n = len(A)

    window_sum = sum(A[:k])
    max_sum = window_sum
    max_sum_start = 0

    for i in range(1, n - k + 1):
        window_sum = window_sum - A[i-1] + A[i+k-1]
        if window_sum > max_sum:
            max_sum = window_sum
            max_sum_start = i

    return max_sum, A[max_sum_start:max_sum_start+k]
```

### Key Problems

- [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
- [76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)
- [643. Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)

---

## 4. Fast and Slow Pointers

### When to Use

This pattern is useful for detecting cycles in linked lists or arrays, finding the middle of a linked list, and related problems.

### Concept

- Slow pointer moves one step at a time, while the fast pointer moves two steps.
- For cycle detection, slow and fast pointers will meet at some point if there is a cycle.
- For finding the middle of a linked list, when the fast pointer reaches the end, the slow pointer will be at the middle.

### Key Problems

- [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
- [202. Happy Number](https://leetcode.com/problems/happy-number/)
- [287. Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)

---

## 5. Linked List In-place Reversal

### When to Use

This technique is essential for problems that require rearranging nodes in a linked list, such as reversing a list or part of it.

### Code Example

```python
def reverse_linked_list(head):
    prev = None
    current = head

    while current:
        next = current.next
        current.next = prev
        prev = current
        current = next

    return prev
```

### Key Problems

- [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)
- [92. Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/)
- [24. Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/)

---

## 6. Monotonic Stack

### When to Use

A monotonic stack is highly effective for problems involving the search for the next greater or smaller element, maintaining elements in increasing or decreasing order, or efficiently computing metrics like the maximum area under a histogram. It is particularly useful in scenarios where the elements need to be processed in a specific order or where comparisons between adjacent elements are required.

### Concept

Given an array, the goal is to find the next greater element for each item. If no greater element exists, output `-1`.

For example:

```txt
Input: [1, 4, 6, 3, 2, 7]
Output: [4, 6, 7, 7, 7, -1]
```

A brute-force solution would involve nested loops, resulting in a time complexity of \(O(n^2)\). However, by using a **monotonic stack**, we can reduce the time complexity to \(O(n)\), making the solution much more efficient.

### Code Example

```python
def next_greater_element(nums):
    stack = []  # This will store indices
    result = [-1] * len(nums)  # Initialize all results to -1

    for i in range(len(nums)):
        # While stack is not empty and the current element is greater than the element corresponding to the index on top of the stack
        while stack and nums[i] > nums[stack[-1]]:
            result[stack.pop()] = nums[i]
        stack.append(i)  # Push the current index onto the stack

    return result
```

### Key Problems

- [496. Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/)
- [84. Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)
- [739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)

---

## 7. Top 'K' Elements

### When to Use

The "Top 'K' Elements" pattern is commonly applied in scenarios where you need to find the 'K' largest or smallest elements, or the 'K' most frequent elements in a dataset. This is particularly useful for problems that involve ranking, sorting, or searching for the highest or lowest values efficiently.

### Concept

Consider the task of finding the 3 largest elements in an array:

```txt
Input: [3, 1, 5, 12, 2, 11]
Output: [5, 11, 12]
```

A naive approach would be to sort the array and take the last three elements, resulting in a time complexity of \(O(n \log n)\). However, by using a **heap**, we can optimize the solution to \(O(n \log k)\).

#### Approach:

1. Start by adding the first 'K' elements to a **min-heap**. This will help keep track of the 'K' largest elements.
2. For each subsequent element, if it is greater than the smallest element in the heap, remove the smallest element and insert the current element.

- **'K' largest elements**: Use a **min-heap**.
- **'K' smallest elements**: Use a **max-heap**.

### Code Example

```python
import heapq

def find_k_largest(nums, k):
    min_heap = []

    # Add first 'K' elements to the min heap
    for i in range(k):
        heapq.heappush(min_heap, nums[i])

    # Process the remaining elements
    for i in range(k, len(nums)):
        if nums[i] > min_heap[0]:  # If current element is larger than the smallest in the heap
            heapq.heappop(min_heap)  # Remove the smallest
            heapq.heappush(min_heap, nums[i])  # Add the current element

    return min_heap
```

### Key Problems

- [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)
- [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)
- [373. Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/)

---

## 8. Overlapping Intervals

### When to Use

The "Overlapping Intervals" pattern is ideal for problems that involve processing intervals, such as merging overlapping intervals, finding intersections, or managing intervals in scheduling or timeline-based applications. This pattern is highly effective when you need to efficiently compare, merge, or manipulate intervals to solve problems.

### Concept

There are several variations of problems involving overlapping intervals, each with its specific approach:

1. **Merging Overlapping Intervals**: Given a list of intervals, the goal is to merge all overlapping intervals into one.

   **Example:**

   ```
   Input: [[1, 3], [2, 6], [8, 10], [15, 18]]
   Output: [[1, 6], [8, 10], [15, 18]]
   ```

2. **Finding Intersections of Two Sets of Intervals**: Find the intersection between two lists of intervals where each interval represents a range.

   **Example:**

   ```
   Input: [[0,2],[5,10],[13,23],[24,25]], [[1,5],[8,12],[15,24],[25,26]]
   Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
   ```

3. **Inserting a New Interval**: Given a list of non-overlapping intervals sorted by their start time, insert a new interval into the list while maintaining the sorted order and merging any necessary overlapping intervals.

   **Example:**

   ```
   Input: [[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]
   Output: [[1,2],[3,10],[12,16]]
   ```

### Approach for Merging Intervals:

To merge overlapping intervals, follow these steps:

1. **Sort the intervals** based on the start time.
2. **Initialize a list** to store the merged intervals with the first interval.
3. **Iterate through the sorted intervals**:
   - If the current interval does not overlap with the last interval in the result list, add it to the result list.
   - If there is an overlap, merge the current interval with the last interval in the result list by updating the end time.

### Code Example

```python
def merge_intervals(intervals):
    if not intervals:
        return []

    # Sort intervals by their start time
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]

    for i in range(1, len(intervals)):
        # If the current interval overlaps with the last merged interval
        if intervals[i][0] <= merged[-1][1]:
            # Merge by updating the end time of the last merged interval
            merged[-1][1] = max(merged[-1][1], intervals[i][1])
        else:
            # No overlap, add the current interval to merged list
            merged.append(intervals[i])

    return merged
```

### Key Problems

- [56. Merge Intervals](https://leetcode.com/problems/merge-intervals/)
- [57. Insert Interval](https://leetcode.com/problems/insert-interval/)
- [435. Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)

---

## 9. Modified Binary Search

Modified Binary Search is a variant of the classic binary search algorithm used to solve problems where the array is not perfectly sorted or where special conditions require adaptations of the standard approach. It is a powerful technique applicable in numerous scenarios beyond simple sorted arrays.

### When to Use

Modified Binary Search is particularly useful in the following cases:

- **Searching in a Nearly Sorted Array**: Arrays that are almost sorted but have some elements misplaced.
- **Searching in a Rotated Sorted Array**: Arrays that have been sorted and then rotated at some pivot unknown to us.
- **Searching in a List with Unknown Length**: Lists where the length is not explicitly known, such as streams or linked lists.
- **Searching in an Array with Duplicates**: Arrays that contain repeated elements where finding the exact match requires careful handling.
- **Finding the First or Last Occurrence of an Element**: Problems where the position of the first or last appearance of an element is needed.
- **Finding the Square Root of a Number**: Determining the square root of a number to a certain precision.
- **Finding a Peak Element**: Identifying an element that is greater than its neighbors in an unsorted array.

### Concept: Searching in a Rotated Sorted Array

Consider a rotated sorted array where the sorted array has been shifted at some pivot point:

**Example:**

```txt
Input: [4, 5, 6, 7, 0, 1, 2], Key: 0
Output: 4 (index of 0)
```

The key idea is to identify which half of the array is sorted and then determine if the key lies within that half. If it does, continue the search within that half; otherwise, search in the other half.

### Code Example

```python
def search_rotated_array(arr, key):
    start, end = 0, len(arr) - 1

    while start <= end:
        mid = start + (end - start) // 2

        # If the middle element is the target
        if arr[mid] == key:
            return mid

        # Determine which side is sorted
        if arr[start] <= arr[mid]:  # Left side is sorted
            if arr[start] <= key < arr[mid]:  # Key is in the left half
                end = mid - 1
            else:  # Key is in the right half
                start = mid + 1
        else:  # Right side is sorted
            if arr[mid] < key <= arr[end]:  # Key is in the right half
                start = mid + 1
            else:  # Key is in the left half
                end = mid - 1

    return -1  # Key not found
```

### Key Problems

- [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
- [153. Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)
- [240. Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/)

---

## 10. Binary Tree Traversal

**Binary Tree Traversal** is a fundamental technique for systematically visiting each node in a binary tree exactly once to perform specific operations, such as searching, inserting, deleting, or extracting information. Traversals are crucial for a wide range of binary tree operations, including manipulation, analysis, and data retrieval. There are four primary types of binary tree traversals:

### Types of Traversal

1. **Pre-order Traversal (Root → Left → Right):**

   - Visit the root node first, then recursively traverse the left subtree, followed by the right subtree.
   - Useful for copying or serializing a tree, where you want to save the structure of the tree.

2. **In-order Traversal (Left → Root → Right):**

   - Recursively traverse the left subtree, visit the root node, and then traverse the right subtree.
   - Particularly useful for retrieving values from a Binary Search Tree (BST) in sorted order.

3. **Post-order Traversal (Left → Right → Root):**

   - Recursively traverse the left subtree, then the right subtree, and visit the root node last.
   - Helpful when you need to delete or process all child nodes before processing the parent node.

4. **Level-order Traversal (Breadth-First, Level by Level):**
   - Traverse nodes level by level from left to right.
   - Best for situations where you need to explore nodes at the same level before moving to the next level, such as finding the shortest path in an unweighted tree.

### Code Examples

```python
# Pre-order Traversal: Root -> Left -> Right
def preorder_traversal(self, node):
    if node:
        print(node.val, end=' ')  # Visit root
        self.preorder_traversal(node.left)  # Traverse left
        self.preorder_traversal(node.right)  # Traverse right

# In-order Traversal: Left -> Root -> Right
def inorder_traversal(self, node):
    if node:
        self.inorder_traversal(node.left)  # Traverse left
        print(node.val, end=' ')  # Visit root
        self.inorder_traversal(node.right)  # Traverse right

# Post-order Traversal: Left -> Right -> Root
def postorder_traversal(self, node):
    if node:
        self.postorder_traversal(node.left)  # Traverse left
        self.postorder_traversal(node.right)  # Traverse right
        print(node.val, end=' ')  # Visit root

from collections import deque

# Level-order Traversal: Level by Level from Left to Right
def levelorder_traversal(self, root):
    if not root:
        return []

    result = []
    queue = deque([root])  # Initialize queue with root

    while queue:
        level_size = len(queue)  # Number of nodes at current level
        current_level = []

        for _ in range(level_size):
            node = queue.popleft()  # Dequeue a node
            current_level.append(node.val)  # Process the current node

            if node.left:
                queue.append(node.left)  # Enqueue left child
            if node.right:
                queue.append(node.right)  # Enqueue right child

        result.append(current_level)  # Add current level to result

    return result
```

### Key Problems

- [107. Binary Tree Level Order Traversal II](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/)
- [124. Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
- [230. Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)
- [257. Binary Tree Paths](https://leetcode.com/problems/binary-tree-paths/)

---

## 11. Depth-First Search (DFS)

**Depth-First Search (DFS)** is an algorithm for traversing or searching through graphs and trees. It explores as far as possible along each branch before backtracking, making it ideal for problems where you need to visit all nodes or explore all paths.

### When to Use

DFS is commonly used in scenarios such as:

- **Finding a Path Between Two Nodes**: Used to determine if there exists a path between two nodes in a graph.
- **Checking if a Graph Contains a Cycle**: Detects cycles in both directed and undirected graphs.
- **Finding a Topological Order in a Directed Acyclic Graph (DAG)**: Useful for scheduling problems or tasks with dependencies.
- **Counting the Number of Connected Components in a Graph**: Helps in identifying isolated subgraphs.

### Code Examples

DFS can be implemented in both recursive and iterative ways:

#### Recursive DFS

```python
def dfs_recursive(self, node, visited):
    visited.add(node)  # Mark the node as visited
    print(node, end=' ')  # Perform the required operation (e.g., print)

    # Recurse for all adjacent vertices
    for neighbor in self.graph[node]:
        if neighbor not in visited:
            self.dfs_recursive(neighbor, visited)
```

#### Iterative DFS

```python
def dfs_iterative(self, start):
    visited = set()  # Keep track of visited nodes
    stack = [start]  # Use a stack to manage the traversal order

    while stack:
        vertex = stack.pop()  # Pop a vertex from the stack
        if vertex not in visited:
            visited.add(vertex)  # Mark the vertex as visited
            print(vertex, end=' ')  # Perform the required operation (e.g., print)

            # Add all unvisited neighbors to the stack
            for neighbor in self.graph[vertex]:
                if neighbor not in visited:
                    stack.append(neighbor)
```

### General Approach

1. **Choose a Starting Point**: Select the node from which you want to start the traversal.
2. **Keep Track of Visited Nodes**: Use a set or array to avoid visiting the same node multiple times, which could lead to infinite loops.
3. **Perform Required Operations on the Node**: This could be printing the node, calculating a value, etc.
4. **Explore Unvisited Neighbors**: For each node, explore its neighbors that have not been visited yet.
5. **Continue Until All Nodes Are Visited**: Repeat steps 3 and 4 until there are no more nodes to visit.

### Key Problems

- [113. Path Sum II](https://leetcode.com/problems/path-sum-ii/)
- [133. Clone Graph](https://leetcode.com/problems/clone-graph/)
- [210. Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)

---

## 12. Breadth-First Search (BFS)

**Breadth-First Search (BFS)** is an algorithm for traversing or searching through the nodes of a tree or graph, exploring all neighbors at the current level before moving on to nodes at the next depth level. This level-by-level exploration is ideal for problems that require the shortest path or need to visit all nodes on the same level before diving deeper.

### When to Use

BFS is particularly useful in scenarios such as:

- **Finding the Shortest Path Between Two Nodes in an Unweighted Graph**: BFS ensures that the shortest path is found by exploring all nodes at the present depth level before moving deeper.
- **Printing All Nodes of a Tree Level by Level**: BFS is naturally suited for level-order traversal in trees.
- **Finding All Connected Components in a Graph**: By exploring all reachable nodes from each starting point, BFS can help identify all connected components.
- **Finding the Shortest Transformation Sequence from One Word to Another**: Useful in word ladder problems where each step must be the shortest possible transformation.

### Code Example

Here is the Python implementation of BFS using a queue:

```python
from collections import deque

def bfs(self, start):
    visited = set()  # Track visited nodes
    queue = deque([start])  # Initialize the queue with the starting node

    visited.add(start)  # Mark the start node as visited

    while queue:
        vertex = queue.popleft()  # Dequeue a vertex
        print(vertex, end=' ')  # Perform the required operation (e.g., print)

        # Enqueue all unvisited neighbors
        for neighbor in self.graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)  # Mark neighbor as visited
                queue.append(neighbor)  # Add neighbor to the queue
```

### Generic Approach

1. **Add the Starting Node to the Queue**: Initialize the queue with the starting node.
2. **Set Up a Visited Set or Array**: Use a set to track visited nodes and avoid processing the same node more than once.
3. **Continue While the Queue is Not Empty**: While there are nodes in the queue, repeat the process.
   - **Dequeue a Node and Process It**: Remove the front node from the queue and perform the required operation (e.g., print).
   - **Enqueue Unvisited Neighbors**: For each unvisited neighbor of the current node, mark it as visited and add it to the queue.
4. **Repeat Until the Queue is Empty**: Continue until all nodes have been visited.

### Key Problems

- [102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
- [127. Word Ladder](https://leetcode.com/problems/word-ladder/)
- [994. Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)

---

## 13. Matrix Traversal

Matrix traversal problems often resemble graph traversal problems, where the nodes are the cells in the matrix, and the edges represent possible movements from one cell to another. Depth-First Search (DFS) or Breadth-First Search (BFS) can be employed to explore the matrix, particularly for problems involving finding paths, connected components, or shortest paths in a grid.

### When to Use

Matrix traversal techniques are commonly used for:

- **Finding the Shortest Path in a Grid**: BFS is ideal for this as it explores all possible paths level by level.
- **Counting Connected Components**: Such as the number of islands in a grid where '1' represents land and '0' represents water.
- **Flood Fill Algorithms**: Used in image processing, similar to the paint bucket tool in graphics software.

### Example: Island Problem

Given a grid where `'1'` represents land and `'0'` represents water, the task is to count the number of islands. An island is formed by connecting adjacent lands horizontally or vertically.

```python
def count_islands(grid):
    if not grid or not grid[0]:  # Edge case: empty grid
        return 0

    rows, cols = len(grid), len(grid[0])
    islands = 0

    # Depth-First Search (DFS) to mark all cells in the current island as visited
    def dfs(i, j):
        if i < 0 or i >= rows or j < 0 or j >= cols or grid[i][j] == '0':
            return

        grid[i][j] = '0'  # Mark the cell as visited by changing it to '0'

        # Explore all four possible directions (up, down, left, right)
        dfs(i + 1, j)  # Down
        dfs(i - 1, j)  # Up
        dfs(i, j + 1)  # Right
        dfs(i, j - 1)  # Left

    # Iterate through each cell in the grid
    for i in range(rows):
        for j in range(cols):
            if grid[i][j] == '1':  # Found an unvisited island
                islands += 1  # Increment the island count
                dfs(i, j)  # Perform DFS to mark the entire island

    return islands
```

### General Approach

1. **Identify Nodes and Edges**: Consider each cell as a node and valid movements (up, down, left, right, or diagonals) as edges.
2. **Choose the Right Traversal Method**:
   - **DFS**: Useful for exploring all connected nodes/components.
   - **BFS**: Ideal for finding the shortest path in an unweighted grid.
3. **Mark Visited Cells**: Avoid revisiting cells by marking them as visited.
4. **Repeat Until All Cells are Processed**: Continue the traversal until all connected components or paths are explored.

### Key Problems

- [130. Surrounded Regions](https://leetcode.com/problems/surrounded-regions/)
- [200. Number of Islands](https://leetcode.com/problems/number-of-islands/)
- [733. Flood Fill](https://leetcode.com/problems/flood-fill/)

---

## 14. Backtracking

**Backtracking** is a recursive algorithmic technique for solving problems by exploring all potential solution paths and "backtracking" when a path does not lead to a valid solution. It is particularly powerful in scenarios where you need to find all possible solutions rather than just one.

### When to Use

Backtracking is especially useful in problems where you need to:

- **Generate All Possible Permutations or Combinations**: For example, finding all possible arrangements of a set of elements.
- **Solve Constraint Satisfaction Problems**: Such as the **Sudoku** or **N-Queens** problems, where the solution must satisfy certain conditions.
- **Find All Possible Paths in a Graph or Maze**: Backtracking can be used to explore all paths from start to end, identifying valid paths that meet specific criteria.
- **Generate All Valid Parentheses Combinations**: For example, generating all valid parentheses strings of a given length.

### Example: Generate All Possible Subsets

Given a set of elements `[1, 2, 3]`, the goal is to generate all possible subsets (the power set). This can be achieved by starting with an empty set and, for each element, choosing whether to include or exclude it, then recursively repeating the process for the next element.

Illustration of the recursive tree for generating subsets:

```txt
                      []
                /            \
             []                [1]
           /    \           /       \
        []      [2]     [1]        [1,2]
       /  \     /  \     /  \        /   \
[]   [3] [2,3] [1] [1,3] [1,2] [1,2,3]
```

### Code Example

Here is the Python implementation for generating all possible subsets using backtracking:

```python
def subsets(nums):
    def backtrack(start, path):
        # Append a copy of the current subset (path) to the result list
        result.append(path[:])

        # Explore all possible elements to include in the subset
        for i in range(start, len(nums)):
            path.append(nums[i])  # Include the element
            backtrack(i + 1, path)  # Recurse to generate subsets including the current element
            path.pop()  # Backtrack by removing the element to try other possibilities

    result = []
    backtrack(0, [])  # Start the backtracking process from index 0 with an empty path
    return result
```

### General Approach

1. **Choose Elements to Include or Exclude**: For each decision point, decide whether to include or exclude the current element.
2. **Recurse to the Next Element**: Continue exploring the decision tree recursively for the next element.
3. **Backtrack**: When a valid solution is found or all possibilities have been explored for a given path, backtrack by removing the last element and trying the next possibility.
4. **Store Valid Solutions**: Add valid paths or solutions to the result list.

### Key Problems

- [46. Permutations](https://leetcode.com/problems/permutations/)
- [78. Subsets](https://leetcode.com/problems/subsets/)
- [51. N-Queens](https://leetcode.com/problems/n-queens/)

---

## 15. Dynamic Programming (DP)

**Dynamic Programming (DP)** is a powerful technique used to solve optimization problems by breaking them down into smaller subproblems and storing their solutions to avoid redundant work. It is particularly useful in problems where there are overlapping subproblems and an optimal substructure.

### When to Use

Dynamic Programming is useful in problems with:

- **Overlapping Subproblems**: Problems that can be broken down into smaller, similar subproblems, which are solved independently and whose solutions are stored for future reference.
- **Optimal Substructure**: Problems where the optimal solution to the problem can be constructed from the optimal solutions of its subproblems. Typically involves maximizing or minimizing a certain value, or counting the number of ways to achieve a certain result.

### Common Dynamic Programming Problems

- **Fibonacci Numbers**: Calculating the nth Fibonacci number using a bottom-up or top-down approach.
- **0/1 Knapsack Problem**: Determining the maximum value that can be obtained in a knapsack of a certain capacity.
- **Longest Common Subsequence (LCS)**: Finding the longest subsequence common to two sequences.
- **Longest Increasing Subsequence (LIS)**: Finding the longest subsequence in an array where the elements are sorted in increasing order.
- **Subset Sum Problem**: Determining if there exists a subset of elements that sum up to a given target.
- **Matrix Chain Multiplication**: Determining the most efficient way to multiply a chain of matrices.

### Example Problem: Fibonacci Numbers

One of the classic examples to demonstrate dynamic programming is finding the nth Fibonacci number. The naive recursive approach has an exponential time complexity, but we can optimize it using dynamic programming.

**Code Example: Fibonacci Numbers Using DP**

```python
def fibonacci(n):
    if n <= 1:
        return n

    # Initialize a DP table to store Fibonacci numbers up to n
    dp = [0] * (n + 1)
    dp[1] = 1

    # Fill the DP table iteratively
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]

    return dp[n]
```

### General Approach

1. **Define the Subproblem**: Break the problem into smaller, manageable subproblems that can be solved independently.
2. **Identify State Variables**: Determine the variables that define the state of each subproblem. For example, in the knapsack problem, the state can be defined by the number of items considered and the current weight of the knapsack.
3. **Recurrence Relation**: Find the relation that expresses the solution to a problem in terms of the solution to smaller subproblems.
4. **Base Cases**: Identify and define the base cases for the recursion.
5. **Iterative Approach or Memoization**: Use either a bottom-up approach (iterative) or top-down approach (recursive with memoization) to solve the problem efficiently.

### Key Problems

- [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
- [300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
- [312. Burst Balloons](https://leetcode.com/problems/burst-balloons/)
- [322. Coin Change](https://leetcode.com/problems/coin-change/)
- [416. Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)
- [1143. Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)
