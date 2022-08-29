<template>
    <div class="container-fluid">
        <ul
            class="nav nav-pills mb-3 border border-success rounded p-3"
            id="pills-tab"
            role="tablist"
        >
            <li class="nav-item" role="presentation">
                <button
                    class="nav-link active"
                    id="pills-magus-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-magus"
                    type="button"
                    role="tab"
                    aria-controls="pills-magus"
                    aria-selected="true"
                >
                    MAGUS
                </button>
            </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
            <div
                class="tab-pane fade show active"
                id="pills-magus"
                role="tabpanel"
                aria-labelledby="pills-magus-tab"
            >
               <magus-module-base-view />
            </div>
        </div>
    </div>
</template>

<script>
import MagusModuleBaseView from './gm_site/MagusModuleBaseView.vue';
export default {
    components: {
        MagusModuleBaseView,
    },
    mounted() {},
};
</script>
