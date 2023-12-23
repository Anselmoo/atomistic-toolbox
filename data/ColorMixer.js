function mixColors(color1, color2) {
  let color1RGB = hexToRGB(color1)
  let color2RGB = hexToRGB(color2)

  let mixedRGB = {
    r: Math.round((color1RGB.r + color2RGB.r) / 2),
    g: Math.round((color1RGB.g + color2RGB.g) / 2),
    b: Math.round((color1RGB.b + color2RGB.b) / 2)
  }

  return RGBToHex(mixedRGB)
}

function hexToRGB(hex) {
  let r = parseInt(hex.slice(1, 3), 16)
  let g = parseInt(hex.slice(3, 5), 16)
  let b = parseInt(hex.slice(5, 7), 16)

  return { r, g, b }
}

function RGBToHex(rgb) {
  let r = rgb.r.toString(16).padStart(2, '0')
  let g = rgb.g.toString(16).padStart(2, '0')
  let b = rgb.b.toString(16).padStart(2, '0')

  return '#' + r + g + b
}

console.log(mixColors('#41B883', '#34495E'))
