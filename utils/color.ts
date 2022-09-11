function rgbToHex(r: number, g: number, b: number): string {
  return `0x${[r, g, b].map((x) => {
        const hex = x.toString(16)
        return hex.length === 1 ? `0${hex}` : hex
    }).join('')}`
}

export { rgbToHex }
