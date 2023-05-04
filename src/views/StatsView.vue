<script setup>
import { storeToRefs } from 'pinia';
import { useNotes } from '../stores/notes';

const noteStores = useNotes();

const { getTotalNotes, getTotalCharacters } = storeToRefs(noteStores);
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
  </div>
</template>

<style scoped></style>
