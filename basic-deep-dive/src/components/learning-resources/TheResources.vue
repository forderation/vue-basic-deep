<template>
  <base-card>
    <base-button
      @click="setSelectedResource('stored-resources')"
      :mode="storeResButtonMode"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedResource('add-resource')"
      :mode="addResButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedResource"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: { StoredResources, AddResource },
  computed: {
    storeResButtonMode() {
      return this.selectedResource === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedResource === 'add-resource' ? null : 'flat';
    },
  },
  data() {
    return {
      selectedResource: 'stored-resources',
      storedResources: [
        {
          id: 'learning-resource',
          title: 'Official Guide',
          desc: 'The vue.js official documentation',
          link: 'https://v3.vuejs.org/',
        },
        {
          id: 'google',
          title: 'Learning more',
          desc: 'Learn and search more on Google',
          link: 'https://google.com/',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addRes: this.addResource,
      deleteRes: this.deleteResource,
    };
  },
  methods: {
    setSelectedResource(selected) {
      this.selectedResource = selected;
    },
    deleteResource(id) {
      let deleteIndex = this.storedResources.findIndex((e) => e.id == id);
      this.storedResources.splice(deleteIndex, 1);
    },
    addResource(title, description, link) {
      let newRes = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: link,
      };
      this.storedResources.unshift(newRes);
      this.selectedResource = 'stored-resources';
    },
  },
};
</script>