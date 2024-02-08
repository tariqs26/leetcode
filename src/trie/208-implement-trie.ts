class Trie {
  children: Record<string, Trie>
  isEnd: boolean
  constructor() {
    this.children = {}
    this.isEnd = false
  }

  insert(word: string): void {
    if (word === "") {
      this.isEnd = true
      return
    }
    if (word[0] in this.children) this.children[word[0]].insert(word.slice(1))
    else {
      const newTrie = new Trie()
      this.children[word[0]] = newTrie
      newTrie.insert(word.slice(1))
    }
  }

  search(word: string): boolean {
    if (word === "") return this.isEnd

    if (word[0] in this.children)
      return this.children[word[0]].search(word.slice(1))

    return false
  }

  startsWith(prefix: string): boolean {
    if (prefix === "") return true

    if (prefix[0] in this.children)
      return this.children[prefix[0]].startsWith(prefix.slice(1))
    return false
  }
}
