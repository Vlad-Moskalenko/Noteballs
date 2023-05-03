<script setup>
import { ref } from 'vue';

import Note from '../components/Notes/Note.vue';

/*notes*/
const notes = ref([
  {
    id: 'id1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sint voluptates, nemo explicabo mollitia eos alias amet numquam, praesentium veniam qui! Tenetur excepturi ipsam blanditiis nisi rerum veniam eveniet neque?',
  },
  {
    id: 'id2',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 'id3',
    content:
      'Aut sint voluptates, nemo explicabo mollitia eos alias amet numquam, praesentium veniam qui! Tenetur excepturi ipsam blanditiis nisi rerum veniam eveniet neque?',
  },
]);

/*add new note*/
const newNote = ref('');
const textarea = ref(null);

const addNewNote = () => {
  let currentDate = new Date().getTime();

  let note = {
    id: currentDate.toString(),
    content: newNote.value,
  };

  notes.value.unshift(note);
  newNote.value = '';
  textarea.value.focus();
};

/*delete note*/
const deleteNote = id => (notes.value = notes.value.filter(note => note.id !== id));
</script>

<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            ref="textarea"
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note"
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNewNote"
            :disabled="!newNote"
            class="button is-link has-background-success"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>
    <Note v-for="note in notes" :key="note.id" :note="note" @deleteNote="deleteNote" />
  </div>
</template>

<style scoped></style>
