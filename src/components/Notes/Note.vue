<script setup>
import { computed } from '@vue/reactivity';

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

/*handle delete note */

const emit = defineEmits(['deleteNote']);

const handleDeleteNote = id => {
  emit('deleteNote', id);
};
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
      <button class="card-footer-item button is-info is-light">Edit</button>
      <button @click="handleDeleteNote(note.id)" class="card-footer-item button is-danger is-light">
        Delete
      </button>
    </footer>
  </div>
</template>

<style scoped></style>
