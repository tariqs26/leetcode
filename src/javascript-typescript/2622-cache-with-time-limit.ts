class TimeLimitedCache {
  private items: Record<number, [number, Timer]> = {} 

  set(key: number, value: number, duration: number): boolean {
    let itemExists = true

    if (this.items[key] === undefined) itemExists = false

    if (itemExists) clearInterval(this.items[key][1])

    this.items[key] = [
      value,
      setTimeout(() => {
        delete this.items[key]
      }, duration),
    ]

    return itemExists
  }

  get(key: number): number {
    return this.items[key] ? this.items[key][0] : -1
  }

  count(): number {
    return Object.keys(this.items).length
  }
}
