// DESCRIPTION: 
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

//SOLUTION:
const getSize = (width, height, depth) => [2 * (height * width + height * depth + width * depth), width * height * depth]