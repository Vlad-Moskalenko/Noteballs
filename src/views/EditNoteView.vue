<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useNotes } from '../stores/notes';
import AddEditNote from '../components/Notes/AddEditNote.vue';

const storeNotes = useNotes();
const route = useRoute();
const router = useRouter();

const noteContent = ref(storeNotes.getNoteContent(route.params.id));

const handleSaveClick = () => {
  storeNotes.editNoteContent(route.params.id, noteContent.value);

  router.back();
};
</script>

<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      ref="addEditNoteRef"
      placeholder="Edit note"
      label="Edit Note"
      bgColor="info"
    >
      <template #button>
        <button @click="$router.back()" class="button is-link is-light mr-3">Cancel</button>
        <button
          :disabled="!noteContent"
          @click="handleSaveClick"
          class="button is-link has-background-info"
        >
          Save edit
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<style lang="scss" scoped></style>
