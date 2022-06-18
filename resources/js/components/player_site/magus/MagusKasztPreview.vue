<template>
    <div class="container-fluid">
        <p v-for="des, index in kaszt.description" :key="index">{{ des }}</p>
       <p><b>Harcérték</b></p>
       <p>{{ kaszt.harcertek }}</p>
       <p><b>Életerő és Fájdalomtűrés</b></p>
       <p>{{ kaszt.eletero }}</p>
       <p><b>Képzetségek</b></p>
       <p>{{ kaszt.kepzetsegek }}</p>
       <!-- Ide kell meg felsorolni a kepzetsegeket + Tovabbi szinteken megkapandokat -->
       <p><b>Tapasztalati Szint</b></p>
       <p>{{ kaszt.tapasztalat }}</p>
       <div class="row">
           <div class="col text-center">
               <p><b>Tapasztalati pont</b></p>
               <p><span>{{ kaszt.TpSzint[0][0] }}</span> - <span>{{ kaszt.TpSzint[0][1] }}</span></p>
               <p><span>{{ kaszt.TpSzint[1][0] }}</span> - <span>{{ kaszt.TpSzint[1][1] }}</span></p>
               <p><span>{{ kaszt.TpSzint[2][0] }}</span> - <span>{{ kaszt.TpSzint[2][1] }}</span></p>
               <p><span>{{ kaszt.TpSzint[3][0] }}</span> - <span>{{ kaszt.TpSzint[3][1] }}</span></p>
               <p><span>{{ kaszt.TpSzint[4][0] }}</span> - <span>{{ kaszt.TpSzint[4][1] }}</span></p>
               <p><span>{{ kaszt.TpSzint[5][0] }}</span> - <span>{{ kaszt.TpSzint[5][1] }}</span></p>
               <p><span>{{ kaszt.TpSzint[6][0] }}</span> - <span>{{ kaszt.TpSzint[6][1] }}</span></p>
               <p><span>{{ kaszt.TpSzint[7][0] }}</span> - <span>{{ kaszt.TpSzint[7][1] }}</span></p>
               <p><span>{{ kaszt.TpSzint[8][0] }}</span> - <span>{{ kaszt.TpSzint[8][1] }}</span></p>
               <p><span>{{ kaszt.TpSzint[9][0] }}</span> - <span>{{ kaszt.TpSzint[9][1] }}</span></p>
               <p><span>{{ kaszt.TpSzint[10][0] }}</span> - <span>{{ kaszt.TpSzint[10][1] }}</span></p>
               <p><span>{{ kaszt.TpSzint[11][0] }}</span> - <span>{{ kaszt.TpSzint[11][1] }}</span></p>
           </div>
            <div class="col text-center">
                <p><b>Tapasztalati szint</b></p>
                <p>1.</p>
                <p>2.</p>
                <p>3.</p>
                <p>4.</p>
                <p>5.</p>
                <p>6.</p>
                <p>7.</p>
                <p>8.</p>
                <p>9.</p>
                <p>10.</p>
                <p>11.</p>
                <p>12.</p>
           </div>
       </div>
       <p>Minden további szinthez +{{ kaszt.TpSzint[12] }} Tp kell</p>
       <p><b>{{kaszt.name}} Fegyvertára</b></p>
       <p>{{ kaszt.fegyvertar }}</p>
    </div>

</template>

<script>
    export default {
         props: {
            kaszt: Object,
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>