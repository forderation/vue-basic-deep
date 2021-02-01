<template>
  <ul>
    <li>
      <button
        :class="{active:modelValue === 'poor'}"
        type="button"
        @click="activate('poor')"
      >
        Poor
      </button>
    </li>
    <li>
      <button
        :class="{active:modelValue === 'average'}"
        type="button"
        @click="activate('average')"
      >
        Average
      </button>
    </li>
    <li>
      <button
        :class="{active:modelValue === 'great'}"
        type="button"
        @click="activate('great')"
      >
        Great
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emit: ['update:modelValue'],
  //   data() {
  //     return {
  //       activeOption: this.modelValue,
  //     };
  //   },
  computed: {
    activeOption() {
      return this.modelValue;
    },
  },
  methods: {
    activate(option) {
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
.active {
  border: solid #a00078;
}

.active button {
  color: #a00078;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: transparent;
}
</style>