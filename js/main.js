'use strict';

// Importo Vue 
const { createApp } = Vue

createApp({
  data() {
    return {
        list:[
            {
                text:'Fare la spesa',
                done: true        
            },
            {
                text:'Lavare la macchina',
                done: true        
            },
            {
                text:'Studiare Vue',
                done: true        
            }   
             ]
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
    } 
}
}).mount('#app');
