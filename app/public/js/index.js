const Someapp = {
    data() {
      return {
        "person": {},
        }
    },
    computed: {
      prettyBirthday() {
        return dayjs(this.person.dob.date)
        .format('D MMM YYYY')
      }
    },
    methods: {
      fetchUserData()
        {
          console.log("A") 
          fetch('https://randomuser.me/api/') 
          .then( response => response.json() )    
          .then( (responseJson) => {              
               // console.log(json);
               this.person = responseJson.results[0];
               console.log("C"); 
        } )
          .catch ( (err) => {
          console.error( err );
          });
          console.log("B");
          }
  },
      
    created () {   
      this.fetchUserData();                                
  }
}
Vue.createApp(Someapp).mount('#randomuser');
console.log("Z");