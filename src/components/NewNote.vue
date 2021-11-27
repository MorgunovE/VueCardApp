<template>
  <div class="new-note">
    <label>Title</label>
    <input v-model="note.title" type="text">
    <label>Description</label>
    <textarea v-model="note.descr"></textarea>
    <button class="btn btnPrimary buttonNewNotes" @click="addNote">New note</button>
  </div>
</template>

<script>
export default {
  name: "NewNote",
  props: {
    note: {
      type: Object,
      required: true,
    }
  },
  methods: {
    addNote(){
      this.$emit('addNote', this.note)
    }
  }
}
</script>

<style lang="scss">
.new-note {
  text-align: center;
  .buttonNewNotes {
    margin-bottom: 30px;
  }
}
</style>