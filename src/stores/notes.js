import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useNotes = defineStore('notes', () => {
  const notes = ref([
    {
      id: 'id1',
      content:
        'Aut sint voluptates, nemo explicabo mollitia eos alias amet numquam, praesentium veniam qui! Tenetur excepturi ipsam blanditiis nisi rerum veniam eveniet neque?',
    },
    {
      id: 'id2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
  ]);

  const getNoteContent = computed(() => id => {
    const note = notes.value.find(note => note.id === id);
    return note.content;
  });

  const getTotalNotes = computed(() => notes.value.length);

  const getTotalCharacters = computed(() =>
    notes.value.reduce((acc, note) => {
      return acc + note.content.length;
    }, 0)
  );

  const addNewNote = content => {
    let note = {
      id: new Date().getTime().toString(),
      content: content,
    };

    notes.value.unshift(note);
  };

  const deleteNote = id => (notes.value = notes.value.filter(note => note.id !== id));

  const editNoteContent = (id, newContent) => {
    const note = notes.value.find(note => note.id === id);
    note.content = newContent;
  };

  return {
    notes,
    getNoteContent,
    getTotalCharacters,
    getTotalNotes,
    addNewNote,
    deleteNote,
    editNoteContent,
  };
});
