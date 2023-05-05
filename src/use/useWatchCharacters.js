import { watch } from 'vue';

export const useWatchCharacters = (newNote, maxChars = 100) => {
  watch(newNote, newValue => {
    if (newValue.length == maxChars) {
      alert(`No more than ${maxChars} characters`);
    }
  });
};
