<template>
  
<div>
    <div class="text-center mb-5">
        <h1>Admin Panel</h1>
    </div>
    <hr>
    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-messages-tab" data-bs-toggle="pill" data-bs-target="#pills-messages" type="button" role="tab" aria-controls="pills-messages" aria-selected="true">Messages</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-users-tab" data-bs-toggle="pill" data-bs-target="#pills-users" type="button" role="tab" aria-controls="pills-users" aria-selected="false">Users</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-news-tab" data-bs-toggle="pill" data-bs-target="#pills-news" type="button" role="tab" aria-controls="pills-news" aria-selected="false">News</button>
        </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-messages" role="tabpanel" aria-labelledby="pills-messages-tab">
            <costumer-support />
        </div>
        <div class="tab-pane fade" id="pills-users" role="tabpanel" aria-labelledby="pills-users-tab">
            <users-controll />
        </div>
        <div class="tab-pane fade" id="pills-news" role="tabpanel" aria-labelledby="pills-news-tab">
            <wats-new />
        </div>
    </div>
</div>

</template>

<script>
    import UsersControll from './admin_site/UsersControll.vue';
    import CostumerSupport from './admin_site/CostumerSupport.vue';
    import WatsNew from './admin_site/WatsNew.vue';

    export default {
        components: {
           UsersControll,
           CostumerSupport,
           WatsNew,
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>