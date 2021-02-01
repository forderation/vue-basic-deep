<template>
  <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
    <template #default>
      <p>Unfortanely, at least one input value is invalid.</p>
      <p>Please check all input and make sure you fill all field!</p>
    </template>
    <template #actions>
      <base-button @click="confirmError">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitResource">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" ref="title" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          rows="3"
          id="description"
          name="description"
          ref="description"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" id="link" name="link" ref="link" />
      </div>
      <div>
        <base-button type="submit"> Add Resource </base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['resources', 'addRes'],
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    confirmError() {
      this.inputIsInvalid = false;
    },
    submitResource() {
      let title = this.$refs.title.value;
      let description = this.$refs.description.value;
      let link = this.$refs.link.value;
      if (!(title.trim() || description.trim() || link.trim())) {
        this.inputIsInvalid = true;
        return;
      }
      this.addRes(title, description, link);
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>