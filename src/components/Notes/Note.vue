<script setup>
import { computed, reactive } from 'vue';

import ModalDelete from './ModalDelete.vue';

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const contentLength = computed(() => {
  const length = props.note.content.length;
  const description = length > 1 ? 'characters' : 'character';
  return `${length} ${description}`;
});

/*modal delete*/
const modals = reactive({
  deleteNote: false,
});
</script>

<template>
  <div class="card mb-3">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ contentLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/edit/${note.id}`" class="card-footer-item button is-info is-light"
        >Edit</RouterLink
      >
      <button @click="modals.deleteNote = true" class="card-footer-item button is-danger is-light">
        Delete
      </button>
    </footer>
    <ModalDelete v-if="modals.deleteNote" v-model="modals.deleteNote" :noteId="note.id" />
  </div>
</template>

<style scoped></style>
