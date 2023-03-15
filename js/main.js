'use strict';

// Importo Vue 
const { createApp } = Vue

createApp({
  data() {
    return {
        list:[
            {
                text:'Fare la spesa',
                done: false        
            },
            {
                text:'Lavare la macchina',
                done: false        
            },
            {
                text:'Studiare Vue',
                done: false        
            }   
             ],
        newTask:''
    }
  },
  methods:{
    // Toggle 
    toggleDone(index) {
        this.list[index].done=!this.list[index].done;
    },
    // Remove List
    removeListItem(index) {
        this.list.splice(index, 1);
    },
    // Add New Task
    addTask() {
        if (this.newTask.trim() !== '') {
            this.list.push({ text: this.newTask, done: false });
            this.newTask = '';
        }
    }
}
}).mount('#app');
