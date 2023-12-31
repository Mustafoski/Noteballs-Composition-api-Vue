<template>
  <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
    <label class="label has-text-white" v-if="label">{{ label }}</label>
    <div class="field">
      <div class="control">
        <textarea
          class="textarea"
          v-autofocus
          ref="textAreaRef"
          :placeholder="placeholder"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { vAutofocus } from '../../directives/vAutofocus'
// props
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  bgColor: {
    type: String,
    default: 'success'
  },
  placeholder: {
    type: String,
    default: 'Type something...'
  },
  label: {
    type: String
  }
})

//data
const textAreaRef = ref(null)
//focus
const focusTextArea = () => {
  textAreaRef.value.focus()
}

defineExpose({ focusTextArea })
</script>
