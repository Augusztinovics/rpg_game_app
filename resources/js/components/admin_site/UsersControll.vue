<template>
    <div>
        <div v-if="loading" class="bg-success p-3 text-center">
            <h2 class="text-light">Data loading, please wait....</h2>
        </div>
        <div v-if="haveError" class="bg-danger p-3 text-center">
            <h2 class="text-light">Error loading</h2>
            <button type="button" class="btn btn-success m-3" @click="fetchUsers">Retry...</button>
        </div>
        <hr>
        <div class="row my-3">
            <div class="col">
                <div class="input-group mb-3">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon1" @click="searchByUsername">Username</button>
                    <input type="text" v-model="searchUsername" class="form-control" placeholder="Search user by username" aria-label="Search user by username" aria-describedby="button-addon1">
                </div>
            </div>
            <div class="col">
                <div class="input-group mb-3">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="serchByEmail">Email</button>
                    <input type="text" v-model="searchEmail" class="form-control" placeholder="Search user by email" aria-label="Search user by email" aria-describedby="button-addon2">
                </div>
            </div>
        </div>
        <hr>
        <div v-if="havePagination" class="text-center">
            <button v-for="pag, index in pagLinks" :key="'PT' + index" :disabled="!pag.url" :class="{'active':pag.active}" class="btn btn-sm" @click="paginate(pag.url)" v-html="pag.label"></button>
        </div>
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User Name</th>
                        <th>E-mail</th>
                        <th>Level</th>
                        <th>Gold</th>
                        <th>Characters</th>
                        <th>Created</th>
                        <th>Modifyed</th>
                        <th>-</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user, index in users" :key="'U' + index">
                        <td>{{ user.id }}</td>
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.level }}</td>
                        <td>{{ user.gold }}</td>
                        <td>
                            <button v-for="character in user.character_sheets" :key="character.id" type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#charModal" @click="selectCharakter(character)">
                                {{ character.character_data.Nev }} ( {{ character.character_data.Szint }}.Szintű {{ Kaszt(character.character_data.Kaszt).name }})
                            </button>
                        </td>
                        <td>{{ user.created_at }}</td>
                        <td>{{ user.updated_at }}</td>
                        <td>
                            <button class="btn btn-outline-success btn-sm ms-1" type="button" data-bs-toggle="modal" data-bs-target="#userModal" @click="selectedUser=user">Mod</button>
                            <button class="btn btn-outline-danger btn-sm ms-1" type="button"  @click="delUser(user.id)">Del</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div v-if="havePagination" class="text-center">
                <button v-for="pag, index in pagLinks" :key="'PB' + index" :disabled="!pag.url" :class="{'active':pag.active}" class="btn btn-sm" @click="paginate(pag.url)" v-html="pag.label"></button>
            </div>
        </div>

        <!-- User update modal -->
        <div class="modal fade" id="userModal" tabindex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="userModalLabel">Update user</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="selectedUser=null"></button>
                    </div>
                <div v-if="selectedUser!=null" class="modal-body">
                    <label for="rez">Name</label>
                    <input type="text" class="form-control" id="rez" v-model="selectedUser.name">
                    <label for="ezust">E-mail</label>
                    <input type="text" class="form-control" id="ezust" v-model="selectedUser.email">
                    <label for="arany">Level</label>
                    <input type="text" class="form-control" id="arany" v-model="selectedUser.level">
                    <label for="mithrill">Gold</label>
                    <input type="number" class="form-control" id="mithrill" v-model="selectedUser.gold">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="selectedUser=null">Close</button>
                    <button type="button" class="btn btn-primary" @click="modUser" data-bs-dismiss="modal">Save changes</button>
                </div>
                </div>
            </div>
        </div>

        <!-- Character update modal -->
        <div class="modal fade" id="charModal" tabindex="-1" aria-labelledby="charModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="charModalLabel">Update Character</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="clearCharacter"></button>
                    </div>
                <div v-if="selectedCharacter!=null" class="modal-body">
                    <label for="charData">Character Data:</label>
                    <textarea class="form-control" id="charData" rows="30" v-model="selectedCharacterData"></textarea>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="clearCharacter">Close</button>
                    <button type="button" class="btn btn-primary" @click="modCharacter" data-bs-dismiss="modal">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            users: [],
            loading: false,
            haveError: false,
            selectedUser: null,
            searchUsername: '',
            searchEmail: '',
            pagLinks: [],
            selectedCharacter: null,
            selectedCharacterData: '',
        }
    },
    computed: {
        ...mapGetters('magusClasses', {
            magusKaszt: 'magusClass',
        }),
        havePagination() {
            return this.pagLinks.length > 3;
        },
    },
    methods: {
        Kaszt(kasztId) {
            return this.magusKaszt(kasztId);
        },
        modUser() {
            if (this.selectedUser) {
                this.loading = true;
                this.haveError = false;
                axios.post('/admin/update', {
                    selectedUser: this.selectedUser
                })
                .then(res => {
                    this.fetchUsers();
                }).catch(error => {
                    console.log(error);
                    this.loading = false;
                    this.haveError = true;
                })
            }
        },
        delUser(id) {
            this.loading = true;
            this.haveError = false;
            axios.post('/admin/delete/' + id, {})
            .then(res => {
                this.fetchUsers();
            }).catch(error => {
                console.log(error);
                this.loading = false;
                this.haveError = true;
            })
        },
        fetchUsers() {
            this.loading = true;
            this.haveError = false;
            axios.get('/admin/all-users')
            .then(res => {
                this.users = res.data.data;
                this.pagLinks = res.data.links;
                this.loading = false;
            }).catch(error => {
                this.loading = false;
                this.haveError = true;
                console.log(error);
            })
        },
        paginate(link) {
            this.loading = true;
            this.haveError = false;
            axios.get(link)
            .then(res => {
                this.users = res.data.data;
                this.pagLinks = res.data.links;
                this.loading = false;
            }).catch(error => {
                this.haveError = true;
                console.log(error);
            })
        },
        searchByUsername() {
            if (this.searchUsername) {
                 this.loading = true;
                this.haveError = false;
                axios.get('/admin/all-users?usn=' + this.searchUsername)
                .then(res => {
                    this.users = res.data;
                    this.loading = false;
                    this.pagLinks = [];
                    this.searchUsername = '';
                }).catch(error => {
                    this.haveError = true;
                    console.log(error);
                })
            } else {
                this.fetchUsers();
            }
        },
        serchByEmail() {
            if (this.searchEmail) {
                this.loading = true;
                this.haveError = false;
                axios.get('/admin/all-users?use=' + this.searchEmail)
                .then(res => {
                    this.users = res.data;
                    this.loading = false;
                    this.pagLinks = [];
                    this.searchEmail = '';
                }).catch(error => {
                    this.haveError = true;
                    console.log(error);
                })
            } else {
                this.fetchUsers();
            }   
        },
        selectCharakter(character) {
            this.selectedCharacter = character;
            this.selectedCharacterData = JSON.stringify(this.selectedCharacter.character_data, null, "\t");
        },
        clearCharacter() {
            this.selectedCharacter = null;
            this.selectedCharacterData = '';
        },
        modCharacter() {
            console.log('HIVOM A SAVET')
            if (this.selectedCharacter && this.selectedCharacterData) {
                console.log('BENNE A SAVET')
                this.selectedCharacter.character_data = JSON.parse(this.selectedCharacterData);
                this.loading = true;
                this.haveError = false;
                axios.post('/admin/update-character', {
                    selectedCharacter: this.selectedCharacter
                })
                .then(res => {
                    this.fetchUsers();
                }).catch(error => {
                    console.log(error);
                    this.loading = false;
                    this.haveError = true;
                })
            }
        },
    },
    mounted() {
        this.fetchUsers();
    }
}
</script>

<style scoped>
    .active{
        border: 1px solid rgb(15, 91, 161);
    }
</style>