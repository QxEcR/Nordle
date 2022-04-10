export const binarySearch = (arrayOfWords, targetWord, start, end) => {
	// Base Condition to exit recursion
	if (start > end) return false

	// Find the middle index
	let mid = Math.floor((start + end) / 2)

	// Compare mid with given key x
	if (arrayOfWords[mid] === targetWord) return true

	if (arrayOfWords[mid] > targetWord) {
		return binarySearch(arrayOfWords, targetWord, start, mid - 1)
	} else {
		return binarySearch(arrayOfWords, targetWord, mid + 1, end)
	}
}
