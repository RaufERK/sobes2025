// input: 'abacddbec'
// output: 'e'

const uniqValue = (param) => {
  const frq = {}
  param.split('').forEach((element) => {
    if (frq[element]) {
      frq[element]++
    } else {
      frq[element] = 1
    }
  })
  return Object.entries(frq)
}

console.log(uniqValue('abacddbec'))
