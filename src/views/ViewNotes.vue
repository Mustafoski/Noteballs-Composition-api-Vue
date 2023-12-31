<template>
  <div class="notes">
    <AddEditNote v-model="newNote" ref="addEditNoteRef" placeholder="Add a new note">
      <template #buttons>
        <button @click="addNote" :disabled="!newNote" class="button is-link has-background-success">
          Add New Note
        </button>
      </template>
    </AddEditNote>
    <NoteView v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>

<!-- ... rest of your script and style sections remain unchanged ... -->

<script setup>
import NoteView from '@/components/Notes/NoteView.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { useStoreNotes } from '@/stores/storeNotes'
import { ref } from 'vue'
import { useWatchCharacters } from '@/use/useWatchCharacters'
/*notes */

// store notes
const storeNotes = useStoreNotes()

// data
const newNote = ref('')
const addEditNoteRef = ref(null)
const addNote = () => {
  /*
   */
  storeNotes.addNote(newNote.value)
  newNote.value = ''
  addEditNoteRef.value.focusTextArea()
}

useWatchCharacters(newNote)
</script>

<style></style>
