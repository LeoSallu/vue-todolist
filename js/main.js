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
    toggleDone(index) {
        this.list[index].done = !this.list[index].done;
    }  
}
}).mount('#app');
