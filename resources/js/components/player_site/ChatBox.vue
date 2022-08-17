<template>
   <div class="container-fluid">    
     <div class="container text-center my-4">
       <h2>RPG app users chat</h2>
       <p>{{ currentUserName }}</p>
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
          <div>
            <div class="input-group mb-3">
                <button class="btn btn-outline-secondary" type="button" id="button-addon1" @click="searchByUsername">Search/Refresh</button>
                <input type="text" v-model="searchUsername" class="form-control" placeholder="Search user by username" aria-label="Search user by username" aria-describedby="button-addon1">
            </div>
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user, index in allUsers" :key="'U' + index">
                            <td>{{ user.name }}</td>
                            <td>
                                <button v-if="userIsFriend(user.id)=='NO'" class="btn btn-outline-success btn-sm ms-1" type="button">Send Friend Request</button>
                                <p v-if="userIsFriend(user.id)=='PENDING'">Request is send, waiting for answer...</p>
                                <p v-if="userIsFriend(user.id)=='FREND'">Allready a frind</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-if="haveAllUserPagination" class="text-center">
                <button v-for="pag, index in allUserPagLinks" :key="'AllPT' + index" :disabled="!pag.url" :class="{'active':pag.active}" class="btn btn-sm" @click="paginateAllUser(pag.url)" v-html="pag.label"></button>
            </div>
          </div>
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

     <div class="container-fluid">
       <div class="row">
         <div class="col-2">
           my frends/rooms
         </div>
         <div class="col">
           chat boxes
         </div>
       </div>

     </div>
  
  </div>

</template>

<script>
  export default {
    data() {
      return {
        currentUser: null,
        menuTab: '',
        allUserPagLinks: [],
        allUsers: [],
        searchUsername: '',
      }
    },
    computed: {
      haveAllUserPagination() {
          return this.allUserPagLinks.length > 3;
      },
      currentUserName() {
        if (this.currentUser) {
          return this.currentUser.user.name;
        } else {
          return '';
        }
      },
      frends() {
        return [];
      }
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

      //Menu tabs
      searchOpen() {
        this.fetchAllUsers();
        this.menuTab = 'SEARCH';
      },

      requestsOpen() {
        this.menuTab = 'REQUESTS'
      },

      yourRequestsOpen() {
        this.menuTab = 'MYREQUESTS'
      },

      //Methods for user search
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
      userIsFriend(id) {
        if (this.frends.length > 0) {

        } else {
          return 'NO'
        }
      },
      searchByUsername() {
        if (this.searchUsername) {
            axios.get('/chat/all-user?usn=' + this.searchUsername)
            .then(res => {
                this.allUsers = res.data;
                this.allUserPagLinks = [];
                this.searchUsername = '';
            }).catch(error => {
                console.log(error);
            })
        } else {
            this.fetchAllUsers();
        }
      },

    },
    mounted() {
        this.fetchCurrentUser();
    }
  }
</script>

<style scoped>
    .active{
        border: 1px solid rgb(15, 91, 161);
    }
</style>