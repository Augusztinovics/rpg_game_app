<template>
    <div>
        <div class="tool-container">
            <div class="m-3 button-container">
                <button type="button" class="btn btn-outline-success">Mentés</button>
                <button type="button" class="btn btn-outline-secondary ms-3">Törlés</button>
            </div>
            
            <div class="color-options">
                <div class="ms-3 ps-1 border-start border-dark border-2">
                    <p class="mt-2 mb-0 ms-2">szinek:</p>
                    <span class="color-field" style="background-color: black;"></span>
                    <span class="color-field" style="background-color: rgb(29, 26, 26);"></span>
                    <span class="color-field" style="background-color: white;"></span>
                    <input type="color" class="color-input" v-model="selectedColor">
                </div>
                <div class="ms-3 ps-1 border-start border-dark border-2">
                    <p class="mt-2 mb-0 ms-2">ecset:</p>
                    <input type="range" min="1" max="25" class="range-input" v-model="drowSize">
                    <input type="number" maxlength="2" v-model="drowSize" class="number-input">
                    <span v-bind:style="{ width: drowSize + 'px', height: drowSize + 'px', backgroundColor: selectedColor}" class="drow-size-show"></span>
                </div>
                
            </div>
        </div>
        <div>
            <canvas :id="canvasId" class="drowing-canvas"></canvas>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        mapDrowData: {
            type: Array,
            default: () => {return [];}
        },
        canvasId: {
            type: String,
            default: 'canvas'
        }
    },
    data() {
        return {
            localMapData: [],
            drowSize: 2,
            selectedColor: 'black',
        }
    },
    computed: {},
    methods: {},
    mounted() {
        this.localMapData = this.mapDrowData;
    }
}
</script>

<style scoped>
    .tool-container {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid gray;
        display: flex;
    }
    .tool-container .button-container {
        display: inline-block;
    }
    .tool-container .color-options {
        display: inline-block;
        display: flex;
    }
    .tool-container .color-options .color-field {
        display: inline-block;
        height: 30px;
        width: 30px;
        border: 2px solid gray;
        border-radius: 50%;
        margin: 0 10px;
        cursor: pointer;
        align-self: center;
    }
    .tool-container .color-options .color-input {
        align-self: center;
        margin: 0 10px;
    }
    .tool-container .color-options .range-input {
        align-self: center;
        margin: 0 10px;
    }
    .drowing-canvas {
        margin: 20px;
        width: 98%;
        height: 500px;
        min-height: 500px;
        box-shadow: -3px 2px 9px 6px black;
    }
    .number-input {
        width: 60px;
    }
    .drow-size-show {
        display: inline-block;
        margin: 0 10px;
        border-radius: 50%;
    }
</style>