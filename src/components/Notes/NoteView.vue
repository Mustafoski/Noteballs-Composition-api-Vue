<template>
  <div>
    <div class="card mb-4">
      <div class="card-content">
        <div class="content">
          {{ note.content }}
          <div class="has-text-right has-text-grey-light mt-2">
            <small>{{ characterLength }} </small>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <RouterLink :to="`/editNote/${note.id}`" class="card-footer-item">Edit</RouterLink>
        <a href="#" class="card-footer-item" @click.prevent="modals.deleteNote = true">Delete</a>
      </footer>
    </div>
    <ModalDeleteNote v-if="modals.deleteNote" v-model="modals.deleteNote" :noteId="note.id" />
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import ModalDeleteNote from './ModalDeleteNote.vue'

// props
const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

// computed
const characterLength = computed(() => {
  let length = props.note.content.length
  let description = length > 1 ? 'characters' : 'character'
  return `${length} ${description}`
})

// Modals
const modals = reactive({
  deleteNote: false
})
</script>

<style></style>
