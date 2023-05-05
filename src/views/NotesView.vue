<script setup>
import { ref } from 'vue';

import { useWatchCharacters } from '../use/useWatchCharacters';
import { useNotes } from '../stores/notes';

import Note from '../components/Notes/Note.vue';
import AddEditNote from '../components/Notes/AddEditNote.vue';

const newNote = ref('');
const storeNotes = useNotes();
const addEditNoteRef = ref(null);

const handleAddNote = () => {
  storeNotes.addNewNote(newNote.value);

  newNote.value = '';
  addEditNoteRef.value.focusTextarea();
};

/*watch characters*/

useWatchCharacters(newNote);
</script>

<template>
  <div class="notes">
    <AddEditNote v-model="newNote" ref="addEditNoteRef">
      <template #button>
        <button
          @click="handleAddNote"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>
    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>

<style scoped></style>
