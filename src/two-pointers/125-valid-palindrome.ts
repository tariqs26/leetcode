function isPalindrome(s: string): boolean {
  let [lp, rp] = [0, s.length - 1]

  while (lp < rp) {
    if (!isAlphaNumeric(s[lp])) lp++
    else if (!isAlphaNumeric(s[rp])) rp--
    else if (s[lp].toLowerCase() !== s[rp].toLowerCase()) return false
    else {
      lp++
      rp--
    }
  }

  return true
}

function isAlphaNumeric(chr: string): boolean {
  const code = chr.charCodeAt(0)
  return (
    (code >= 48 && code <= 57) ||
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122)
  )
}
