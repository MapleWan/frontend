import { defineStore } from "pinia"
import { ref } from "vue"

const useMainStore = defineStore("main", () => {
  const isLoading = ref(false)
  return {
    isLoading
  }
})

export default useMainStore