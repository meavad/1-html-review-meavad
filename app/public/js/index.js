const Offer = {
    data() {
      return {
        "person": {}
        }
    },
    created () {                                   
    console.log("A")                       
     fetch('https://randomuser.me/api/') 
    .then( response => repsonse.json() )    
        .then( (responseJson) => {              
         console.log(responseJson);
         console.log("C");

         this.result = responseJson.results[0]; 
})
.catch ( (err) => {
console.error(err);
})
console.log("B");
}
}
Vue.createApp(Offer).mount('#offerApp')
console.log("Z");