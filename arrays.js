var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  return newArray = [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [element, ...array]
}

function addElementToEndOfArray(array, element) {
  return newArray = [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array = [...array, element]
}