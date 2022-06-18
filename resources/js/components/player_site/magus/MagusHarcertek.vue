<template>
    <div>
        <h4 class="text-center mt-2">{{ moduleName }}</h4>
        <div class="row">
            <div class="col border-end border-secondary">
                <p>Alap</p>
                <p class="border-bottom border-secondary">{{ alap }}</p>
                <p>Osztott HM</p>
                <p>{{ osztotHm }}</p>
            </div>
            <div class="col">
                <p>Aktuális</p>
                <p class="border-bottom border-secondary">{{ aktualis }}</p>
                <p>Fegyver nélkül</p>
                <p>{{ fegyverNelkul }}</p>
            </div>
        </div>
        <p class="border-top border-secondary">Módositók</p>
        <p v-for="mod, index in modositok" :key="index">{{ mod }}</p>
    </div>
</template>

<script>
export default {
     props: {
        moduleName: String,
        alap: Number,
        osztotHm: Number,
        aktualis: Number,
        fegyverNelkul: Number,
        modositok: Array,
    },
}
</script>