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
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Characters (of all notes)</td>
          <td>{{ storeNotes.totalCharacterCount }}</td>
        </tr>
      </tbody>
    </table>
    <input type="text" class="input" v-autofocus ref="loveNoteballs" />
  </div>
</template>

<script setup>
import { useStoreNotes } from '@/stores/storeNotes'
import { vAutofocus } from '../directives/vAutofocus'
import { useWatchCharacters } from '@/use/useWatchCharacters'
import { ref } from 'vue'
const storeNotes = useStoreNotes()

const loveNoteballs = ref('')
useWatchCharacters(loveNoteballs, 50)
</script>

<style></style>
