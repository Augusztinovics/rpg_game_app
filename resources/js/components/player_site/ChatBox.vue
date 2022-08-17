<template>
   <div class="container-fluid">    
     <div class="container text-center my-4">
       <h2>RPG app users chat</h2>
       <p>{{ currentUser.user_name }}</p>
       <hr>
       <div>
         <button type="button" class="btn btn-success my-3 costum-btn px-3" @click="searchOpen">Seach Users</button>
         <button type="button" class="btn btn-success my-3 costum-btn px-3" @click="requestsOpen">Friend Requests</button>
         <button type="button" class="btn btn-success my-3 costum-btn px-3" @click="yourRequestsOpen">Sended Friend Requests</button>
       </div>
       <div v-if="menuTab=='SEARCH'">
         <hr>
         <button type="button" class="btn btn-success my-3 costum-btn px-3" @click="menuTab=''">Close</button>
          <h3>All registered users</h3>
       </div>
       <div v-if="menuTab=='REQUESTS'">
         <hr>
         <button type="button" class="btn btn-success my-3 costum-btn px-3" @click="menuTab=''">Close</button>
         <h1>Requests</h1>
       </div>
       <div v-if="menuTab=='MYREQUESTS'">
         <hr>
         <button type="button" class="btn btn-success my-3 costum-btn px-3" @click="menuTab=''">Close</button>
         <h1>My Requests</h1>
       </div>
       <hr>
     </div>
  
  </div>

</template>

<script>
  export default {
    data() {
      return {
        currentUser: {
          user_id: null,
          user_name: '',
        },
        friends: [],
        menuTab: '',
        allUserPagLinks: [],
        allUsers: [],
      }
    },
    computed: {
      haveAllUserPagination() {
          return this.allUserPagLinks.length > 3;
      },
    },
    methods: {
      fetchCurrentUser() {
        axios.get('/chat/current-user')
        .then(res => {
            this.currentUser = res.data;
            console.log(this.currentUser);
        }).catch(error => {
            console.log(error);
        })
      },

      searchOpen() {
        this.menuTab = 'SEARCH';
      },

      requestsOpen() {
        this.menuTab = 'REQUESTS'
      },

      fetchAllUsers() {
        axios.get('/chat/all-user')
        .then(res => {
            this.allUsers = res.data.data;
            this.allUserPagLinks = res.data.links;
        }).catch(error => {
            console.log(error);
        })
      },
      paginateAllUser(link) {
        axios.get(link)
        .then(res => {
            this.allUsers = res.data.data;
            this.allUserPagLinks = res.data.links;
        }).catch(error => {
            console.log(error);
        })
      },

      yourRequestsOpen() {
        this.menuTab = 'MYREQUESTS'
      }
    },
    mounted() {
        this.fetchCurrentUser();
    }
  }
</script>

<style scoped>
    
</style>