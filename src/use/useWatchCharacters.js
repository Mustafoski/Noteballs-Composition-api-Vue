import { watch } from 'vue'
// watch
export function useWatchCharacters(valueToWatch, maxChars = 100) {
  watch(valueToWatch, (newValue) => {
    if (newValue.length === maxChars) {
      alert(`only ${maxChars} characters are allowed `)
    }
  })
}
