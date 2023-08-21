export const correctDistance = (distance: string) =>
	Math.trunc(Number(distance)).toLocaleString('en-Us').split(',').join(' ')
