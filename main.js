//Un-optimized
function fibonacci(idx) {
  if (idx === 0)
    return new BigNumber(0)
  if (idx === 1)
    return new BigNumber(1)
  return fibonacci(idx - 1).plus(fibonacci(idx - 2))
}

//Optimized by cache
const superFib = (function() {
    let cache = {}

    function fibCore(idx) {
      if (idx === 0)
        return new BigNumber(0)
      if (idx === 1)
        return new BigNumber(1)
      return superFib(idx - 1).plus(superFib(idx - 2))
    }
    
    return idx => {
      if (typeof cache[idx] === "undefined") {
        return cache[idx] = fibCore(idx)
      } else {
        return cache[idx]
      }
    }
  })()

function test() {
  const resultList = [
    0,
    1,
    1,
    2,
    3,
    5,
    8,
    13,
    21,
    34
  ]

  resultList.forEach((desired, idx) => {
    const result = fibonacci(idx)
    console.log("idx: " + idx + " yields " + result + ", should yield " + desired + " " + (desired === result))
  })
}
