import { MutableRefObject } from "react";
import ColorThief from 'colorthief'

function rgbToHex(r: number, g: number, b: number) {
  return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}


export function getColorFromImage(ref: MutableRefObject<null>): string {
  const colorThief = new ColorThief();
  const result = colorThief.getColor(ref.current, 25);
  return rgbToHex(result[0], result[1], result[2])
}

export function capitalize(str: string): string {
  if (!str) return ''
  return str[0].toUpperCase() + str.slice(1)
}

export function sumArray(arr: number[]): number {
  return arr.reduce((a: number, b: number) => a + b, 0)
}

export const titleCase = (s: string) =>
  s.replace(/^[-_]*(.)/, (_, c) => c.toUpperCase())
    .replace(/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase())