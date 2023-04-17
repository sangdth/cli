import chalk from 'chalk';

export const wait = async (ms: number) => new Promise((r) => setTimeout(r, ms));

type Style = 'black' | 'white' | 'red' | 'green' | 'blue' | 'magenta' | 'cyan' | 'yellow';

export const g = (style: Style, text: string) => chalk[style](text);

export const c = chalk; // alias for chalk

// Popular color
export const red = (text: string) => g('red', text);
export const green = (text: string) => g('green', text);
export const blue = (text: string) => g('blue', text);
export const magenta = (text: string) => g('magenta', text);
