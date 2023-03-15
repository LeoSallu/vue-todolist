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
    test(){
        console.log(this.list[0].done);
    }
  },
  mounted(){
    this.test();
  }
}).mount('#app');
