function isValid(s: string): boolean {
  const stack = []

  const mapping = {
    "{": "}",
    "[": "]",
    "(": ")",
  }

  for (const char of s) {
    if (Object.keys(mapping).includes(char)) stack.push(char)
    else {
      if (!s.length) return false
      const currentChar = stack.pop()
      if (char !== mapping[currentChar]) return false
    }
  }

  return stack.length < 1
}
