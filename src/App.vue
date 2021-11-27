<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <Message v-if="message" :message="message"></Message>
          <NewNote :note="note" @addNote="addNote"/>
          <div class="note-header">
            <h1>{{ title }}</h1>
            <Search  :value="search" placeholder="Find your note" @search="search = $event"/>
            <div class="icons">
              <svg :class="{active: grid}" @click="grid = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <svg :class="{active: !grid}" @click="grid = false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
            </div>
          </div>
          <Notes :notes="notesFilter" @remove="removeNote" :grid="grid"/>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Message from '@/components/Message'
import NewNote from '@/components/NewNote'
import Notes from '@/components/Notes'
import Search from '@/components/Search'
export default {
  name: 'App',
  components: {
    Search,
    Message,
    NewNote,
    Notes
  },
  data() {
    return {
      title: 'Notes App',
      message: null,
      grid: true,
      search: '',
      note: {
        title: '',
        descr: ''
      },
      notes: [
        {
          title: 'First Note',
          descr: 'Description for first note',
          date: new Date(Date.now()).toLocaleString()
        },
        {
          title: 'Second Note',
          descr: 'Description for Second note',
          date: new Date(Date.now()).toLocaleString()
        },
        {
          title: 'Third Note',
          descr: 'Description for Third note',
          date: new Date(Date.now()).toLocaleString()
        },
      ]
    }
  },
  methods: {
    addNote() {
      let {title, descr} = this.note
      if (title === '') {
        this.message = 'Title can`t be blank'
        return false;
      }
      this.notes.push({
        title,
        descr,
        date: new Date(Date.now()).toLocaleString()
      })
      this.note.title = ''
      this.note.descr = ''
      this.message = null;
    },
    removeNote(index){
      this.notes.splice(index, 1)
    }
  },
  computed: {
    notesFilter(){
      let array = this.notes,
        search = this.search
      if(!search) return array;
      search = search.trim().toLowerCase()
      array = array.filter(function(item){
        if(item.title.toLowerCase().indexOf(search) !== -1) {
          return item
        }
      })
      return array
    }
  },
}
</script>

<style>

</style>
