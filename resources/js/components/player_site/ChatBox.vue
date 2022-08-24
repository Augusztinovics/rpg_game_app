<template>
   <div class="container-fluid">    
     <div class="container text-center my-4">
       <h2>RPG app baráti csevegés</h2>
       <p>{{ currentUserName }}</p>
       <hr>
       <div>
         <button type="button" class="btn btn-success my-3 costum-btn px-3" @click="searchOpen">Felhasználó Keresés</button>
         <button type="button" class="btn btn-success my-3 costum-btn px-3" @click="requestsOpen">Barátkérelmek <span v-if="friendReqCount>0"> ({{ friendReqCount }})</span></button>
         <button type="button" class="btn btn-success my-3 costum-btn px-3" @click="yourRequestsOpen">Elküldött Barátkérelmek <span v-if="friendSendReqCount>0"> ({{ friendSendReqCount }})</span></button>
       </div>
       <div v-if="menuTab=='SEARCH'">
         <hr>
         <button type="button" class="btn btn-success my-3 costum-btn px-3" @click="menuTab=''">Bezár</button>
          <h3>Összes felhasználó</h3>
          <div>
            <div class="input-group mb-3">
                <button class="btn btn-outline-secondary" type="button" id="button-addon1" @click="searchByUsername">Keresés/Frissités</button>
                <input type="text" v-model="searchUsername" class="form-control" placeholder="Search user by username" aria-label="Search user by username" aria-describedby="button-addon1">
            </div>
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Felhasználó neve</th>
                            <th>Lehetőség</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user, index in allUsers" :key="'U' + index">
                            <td>{{ user.name }}</td>
                            <td>
                                <button v-if="userIsFriend(user.id)=='NO'" class="btn btn-outline-success btn-sm ms-1" type="button" data-bs-toggle="modal" data-bs-target="#friendModal" @click="prepareFriendReq(user.id)">Barátkérelem Küldése</button>
                                <p v-if="userIsFriend(user.id)=='PENDING'">Válaszra vár </p>
                                <p v-if="userIsFriend(user.id)=='SPENDING'">Barátkérelem elküldve </p>
                                <p v-if="userIsFriend(user.id)=='FREND'">Már barát</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-if="haveAllUserPagination" class="text-center">
                <button v-for="pag, index in allUserPagLinks" :key="'AllPT' + index" :disabled="!pag.url" :class="{'active':pag.active}" class="btn btn-sm" @click="paginateAllUser(pag.url)" v-html="pag.label"></button>
            </div>
          </div>

          <!-- Friend request modal -->
          <div class="modal fade" id="friendModal" tabindex="-1" aria-labelledby="friendModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="friendModalLabel">Barátkérelem</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <input type="text" class="form-control" id="egyebb-text" v-model="inputFriendReq">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary costum-btn" data-bs-dismiss="modal">Bezár</button>
                    <button type="button" class="btn btn-primary costum-btn" @click="sendFriendRequest" data-bs-dismiss="modal">Elküld</button>
                </div>
                </div>
            </div>
        </div>
       </div>
       <div v-if="menuTab=='REQUESTS'">
         <hr>
         <button type="button" class="btn btn-success my-3 costum-btn px-3" @click="menuTab=''">Bezár</button>
         <h3>Barátkérelmek</h3>
         <hr>
         <div v-for="fr in friendRequests" :key="fr.id" class="border border-primary rounded my-1">
            <p><b>{{ fr.sender.name }}</b> kéri, hogy legyél a barátja</p>
            <p>Üzenet:</p>
            <p>{{ fr.message }}</p>
            <div class="text-center mt-2">
              <button type="button" class="btn btn-success costum-btn m-2" @click="acceptFriendReq(fr.id)">Elfogad</button>
              <button type="button" class="btn btn-danger costum-btn m-2" @click="deleteFriendReq(fr.id)">Elutasít</button>
            </div>
         </div>
       </div>
       <div v-if="menuTab=='MYREQUESTS'">
         <hr>
         <button type="button" class="btn btn-success my-3 costum-btn px-3" @click="menuTab=''">Bezár</button>
         <h3>Általad Küldött Barátkérelmek</h3>
         <hr>
         <div v-for="sfr in sendedFriendRequests" :key="sfr.id" class="border border-primary rounded my-1">
            <p><b>{{ sfr.reciver.name }}</b> kéred, hogy legyen a barátod</p>
            <p>Üzenet:</p>
            <p>{{ sfr.message }}</p>
            <div class="text-center mt-2">
              <button type="button" class="btn btn-danger costum-btn m-2" @click="deleteFriendReq(sfr.id)">Visszavon</button>
            </div>
         </div>
       </div>
       <hr>
     </div>

     <div class="container-fluid">
       <div class="row">
         <div class="col-sm-3">
           <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <b>Barátok</b>
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <p v-for="friend in friends" :key="'Frend' + friend.id"><button type="button" class="btn btn-link" @click="initPrivateChat(friend.friend.id)">{{ friend.friend.name }} <span v-if="friend.active" class="active-user"></span></button></p>
                  </div>
                </div>
              </div>
            
            </div>
         </div>
         <div class="col">
           <div class="chat-box-container">

                <div class="card chat-box">
                  <div class="card-header chat-header">
                    <h4>Közös csevegés</h4>
                  </div>
                  <div id="chatHolder" class="card-body chat-message-container">
                    <div v-for="msg, index in messages" :key="'MSG' + index" class="chat-message-holder" :class="{'own-message' : msg.own}">
                        <p class="chat-message-name"><span v-once>{{ currentTime() }} </span> {{ msg.name }}</p>
                        <p class="chat-message">{{ msg.msg }}</p>
                    </div>
                    <div class="chat-distancer"></div>
                  </div>
                  <div class="card-footer chat-footer">
                      <div class="input-group mb-3">
                          <input type="text" class="form-control" placeholder="üzenet" id="message-input" aria-label="message" aria-describedby="button-addon" v-model="inputMessage" @keypress.enter="sendMessage">
                          <button class="btn btn-success" type="button" id="button-addon" @click="sendMessage">Küldés</button>
                      </div>
                  </div>
                </div>

                
                <div v-for="chat, index in privateChat" :key="'PRI' + index" class="card chat-box">
                    <div class="card-header chat-header d-flex justify-content-between">
                      <h4>{{ friendName(chat.to) }} </h4>
                      <button type="button" class="btn-close" aria-label="Close" @click="closePrivateChat(index)"></button>
                    </div>
                    <div id="chatHolder" class="card-body chat-message-container">
                      <div v-for="msg, index in chat.messages" :key="'MSG'+chat.id + index" class="chat-message-holder" :class="{'own-message' : msg.own}">
                          <p class="chat-message-name"><span v-once>{{ currentTime() }} </span> {{ msg.name }}</p>
                          <p class="chat-message">{{ msg.msg }}</p>
                      </div>
                      <div class="chat-distancer"></div>
                    </div>
                    <div class="card-footer chat-footer">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="üzenet" id="message-input" aria-label="message" aria-describedby="button-addon" v-model="chat.inputMessage" @keypress.enter="sendPrivatMessage(chat.id)">
                            <button class="btn btn-success" type="button" id="button-addon" @click="sendPrivatMessage(chat.id)">Küldés</button>
                        </div>
                    </div>
                  </div>
               

            </div>
         </div>
         <div class="col-sm-1"></div>
       </div>

     </div>
  
  </div>

</template>

<script>

  export default {
    props: {
      serverIpAddress:String
    },
    data() {
      return {
        currentUser: null,
        menuTab: '',
        allUserPagLinks: [],
        allUsers: [],
        searchUsername: '',
        inputFriendReq: '',
        friendReqId: null,
        socket: null,
        inputMessage: '',
        messages: [],
        loggedIn: false,
        privateChat: [],
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
      friends() {
        if (this.currentUser) {
          return this.currentUser.friends;
        } else {
          return [];
        }
      },
      friendRequests() {
        if (this.currentUser) {
          return this.currentUser.recivedFrendRequests;
        } else {
          return [];
        }
      },
      sendedFriendRequests() {
        if (this.currentUser) {
          return this.currentUser.sendedFrendRequests;
        } else {
          return [];
        }
      },
      friendReqCount() {
        return this.friendRequests.length;
      },
      friendSendReqCount() {
        return this.sendedFriendRequests.length;
      },
     
    },
    methods: {
      currentTime() {
          const current = new Date();
          const time = current.getHours() + ":" + ('0'+current.getMinutes()).slice(-2);
          return time;
      },
      friendName (id) {
        return this.friends.find(f => f.friend.id == id).friend.name
      },
      fetchCurrentUser() {
        axios.get('/chat/current-user')
        .then(res => {
            this.currentUser = res.data;
            if (!this.loggedIn) {
               this.socket.emit('singUp', {
                id: this.currentUser.user.id,
                name: this.currentUser.user.name,
              });
              this.loggedIn = true;
            }
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
        let result = 'NO';
        this.friends.forEach(friend => {
          //kerdes az adat
          if (friend.friend.id == id) {
            result = 'FREND';
          }
        });
        this.friendRequests.forEach(fr => {
          if (fr.from_user == id) {
            result = 'PENDING'
          }
        });
        this.sendedFriendRequests.forEach(sfr => {
          if (sfr.to_user == id) {
            result = 'SPENDING'
          }
        });
        return result;
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
      prepareFriendReq(id) {
        this.friendReqId = id;
        this.inputFriendReq = 'Kérem csatlakozzon baráti társaságomhoz';
      },
      sendFriendRequest() {
        if (this.friendReqId) {
          axios.post('/chat/friend-request', {
            to: this.friendReqId,
            message: this.inputFriendReq
          })
          .then(res => {
            this.friendReqId = null;
            this.inputFriendReq = '';
            this.fetchAllUsers();
            this.socket.emit('friendUpdate', 'Update');
          }).catch(error => {
            console.log(error);
          })
        }
      },

      acceptFriendReq(id) {
        axios.post('/chat/accept-friend-request/' + id, {})
        .then(res => {
          this.socket.emit('friendUpdate', 'Update');
        }).catch(error => {
          console.log(error);
        })
      },

      deleteFriendReq(id) {
        axios.post('/chat/delete-friend-request/' + id, {})
        .then(res => {
          this.socket.emit('friendUpdate', 'Update');
        }).catch(error => {
          console.log(error);
        })
      },

      sendMessage() {
        if (this.inputMessage != '') {
            this.socket.emit('chatMsg',{
            msg: this.inputMessage,
            id: this.currentUser.user.id,
            name: this.currentUser.user.name,
            active: true
          });
          this.inputMessage = '';
          document.getElementById('message-input').focus();
        }
      },

      reciveMessage(message) {

        //chack friendlist or id 0 (chatbot) 
        if (message.id === 0 || this.friends.find(fr => fr.friend_id === message.id) || message.id == this.currentUser.user.id) {
          if (message.id == this.currentUser.user.id) {
            message.own = true;
          }
          this.messages.push(message);
          this.$emit('newMessage');
          let activeFriend = this.friends.findIndex(fr => fr.friend_id === message.id);
          if (activeFriend >= 0) {
            if (message.active) {
              this.friends[activeFriend].active = true;
            } else {
              this.friends[activeFriend].active = false;
            }
          }
          let chatHolder = document.getElementById("chatHolder");
          chatHolder.scrollTop = chatHolder.scrollHeight;
        }
      },
      updateUser() {
        this.fetchCurrentUser();
      },
      //private messages
      sendPrivatMessage(to) {

      },
      initPrivateChat(to) {
        let haveChat = this.privateChat.find(c => c.to == to);
        if (!haveChat) {
          this.createNewPrivateChat(to);
        }
      },
      createNewPrivateChat(to) {
        let newChat = {
          id: this.currentUser.user.id + to,
          from: this.currentUser.user.id,
          to: to,
          inputMessage: '',
          messages: [],
        }
        this.privateChat.push(newChat);
      },
      closePrivateChat(index) {
        this.privateChat.splice(index, 1);
      },
    },
    mounted() {
        this.fetchCurrentUser();
        let ip = this.serverIpAddress;
        let port = '4411'
        this.socket = io(ip + ':' + port);
        this.socket.on('message', (message) => {
          this.reciveMessage(message);
        });
        this.socket.on('updateFriend', (msg) => {
          this.updateUser();
        });
    },
    beforeDestroy() {
      console.log('UNMOUNT');
        this.socket.emit('chatMsg', {
          msg: 'Elment',
          id: this.currentUser.user.id,
          name: this.currentUser.user.name,
          active: false
        });
    }
  }
</script>

<style scoped>
    .active{
        border: 1px solid rgb(15, 91, 161);
    }

    .chat-box-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .chat-box {
      height: 500px;
      margin: 10px;
      border: 10px solid green;
      border-radius: 10px;
      flex-basis: 90%;
    }

    .active-user{
      display: inline-block;
      height: 6px;
      width: 6px;
      background-color: green;
      border-radius: 50%;
      margin-bottom: 4px;
    }

    .chat-message-container{
      overflow-x: hidden;
      overflow-y: auto;
    }

    .chat-message-holder {
      padding: 5px;
      margin: 5px;
      background-color: aquamarine;
      border: 1px solid gray;
      border-radius: 4px;
    }
    .own-message {
      margin-left: 20px;
      background-color: rgb(219, 236, 231);
    }
    .chat-message-name {
      margin: 0;
      padding: 0;
      font-size: 0.75rem;
      font-weight: bolder;
      padding-left: 5px;
    }

    .chat-message{
      padding-left: 10px;
    }

    .chat-distancer {
      height: 100px;
    }

    .chat-header {
      border-bottom: 2px solid green;
      background-color: rgb(150, 216, 150);
      padding: 20px;
    }

    .chat-footer {
      border-top: 2px solid green;
      background-color: rgb(150, 216, 150);
      padding: 20px;
    }

    .x-button{
      margin-left: auto;
    }
</style>