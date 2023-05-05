<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

import { useNotes } from '../../stores/notes';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  noteId: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

/*close modal*/
const closeModal = e => {
  if (e.type === 'keydown' && e.key === 'Escape') {
    emit('update:modelValue', false);
  } else if (e.type !== 'keydown') {
    emit('update:modelValue', false);
  }
};

/*delete note*/
const storesNote = useNotes();

const deleteNote = () => {
  storesNote.deleteNote(props.noteId);
};

/*close modal on click outside*/
const modalCardRef = ref(null);

onClickOutside(modalCardRef, closeModal);

/*keyboard control*/
onMounted(() => document.addEventListener('keydown', closeModal));

onUnmounted(() => document.removeEventListener('keydown', closeModal));
</script>

<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalCardRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button @click="closeModal" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">Are you sure you want to delete this note?</section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button @click="closeModal" class="button">Cancel</button>
        <button @click="deleteNote" class="button is-danger">Delete</button>
      </footer>
    </div>
  </div>
</template>

<style scoped></style>
