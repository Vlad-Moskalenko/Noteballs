<script setup>
import { ref } from 'vue';

defineProps({
  modelValue: {
    type: String,
  },
  placeholder: {
    type: String,
    default: 'Add a new note',
  },
  label: String,
  bgColor: {
    type: String,
    default: 'success',
  },
});

defineEmits(['update:modelValue']);

/*focus textarea*/

const textarea = ref(null);

const focusTextarea = () => textarea.value.focus();

defineExpose({
  focusTextarea,
});
</script>

<template>
  <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
    <label v-if="label" class="label has-text-white">{{ label }}</label>
    <div class="field">
      <div class="control">
        <textarea
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          ref="textarea"
          class="textarea"
          :placeholder="placeholder"
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
