<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import { useNotes } from '../stores/notes';
import { vAutofocus } from '../directives/vAutofocus';
import { useWatchCharacters } from '../use/useWatchCharacters';

const noteStores = useNotes();
const input = ref('');

const { getTotalNotes, getTotalCharacters } = storeToRefs(noteStores);

useWatchCharacters(input, 50);
</script>

<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ getTotalNotes }}</td>
        </tr>
        <tr>
          <td>Number of Characters</td>
          <td>{{ getTotalCharacters }}</td>
        </tr>
      </tbody>
    </table>
    <input v-model="input" v-autofocus class="input" type="text" placeholder="Do you" />
  </div>
</template>

<style scoped></style>
