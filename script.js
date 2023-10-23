// [1, 2, 3, 4]

// ["r", "e", "f"]

// [[1, 2, 3], true], [[1, 2, 3], false]

function hasDuplicate(array) {
    const once = new Set(array)
    if (array.length != once.size) {
        return true
    } else {
        return false
    }
}

function vowelCount(string) {
    const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"])
    const mapIt = new Map()
    for (let char of string) {
        if (vowels.has(char)) {
            const mapVal = mapIt.get(char)
            if (mapVal != undefined) {
                mapIt.set(char, (mapVal + 1))
            } else {
                mapIt.set(char, 1)
            }
        }
    }
    return mapIt
}