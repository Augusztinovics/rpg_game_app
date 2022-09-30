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
                    <span class="color-field" style="background-color: rgb(0, 0, 0);"></span>
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
            <canvas :id="canvasId" 
                    class="drowing-canvas"
                    @mousedown="drowStart"
                    @mousemove="drowing"
                    @mouseup="drowEnd"
                    @mouseout="drowEnd"
                >
            </canvas>
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
            selectedColor: '#000000',
            isDrowing: false,
            drowingContext: null,
            canvas: null,
        }
    },
    computed: {},
    methods: {
        drowStart(e) {
            console.log(e);
            console.log(e.clientX - e.offsetX);
            console.log(e.clientY- e.offsetY);
            this.isDrowing = true;
            this.drowingContext.beginPath();
            this.drowingContext.moveTo(e.clientX - (e.clientX - e.offsetX), e.clientY- (e.clientY - e.offsetY));
            e.preventDefault();
        },
        drowing(e) {
            if (this.isDrowing) {
                 console.log('Drowing');
                this.drowingContext.lineTo(e.clientX - (e.clientX - e.offsetX), e.clientY- (e.clientY - e.offsetY));
                this.drowingContext.strokeStyle = this.selectedColor;
                this.drowingContext.lineWidth = this.drowSize;
                this.drowingContext.lineCap = "round";
                this.drowingContext.lineJoin = "round";
                this.drowingContext.stroke();
            }
            e.preventDefault();
            //e.clientx - this.canvas.offsetLeft, e.clienty- this.canvas.offsetRight
        },
        drowEnd(e) {
            if (this.isDrowing) {
                 console.log('Drow End');
                this.drowingContext.stroke();
                this.drowingContext.closePath();
                this.isDrowing = false;
            }
            e.preventDefault();
        },
    },
    mounted() {
        setTimeout(() => {
            this.localMapData = this.mapDrowData;
            this.canvas = document.getElementById(this.canvasId);
            this.drowingContext = this.canvas.getContext("2d");
            let canvasWidth = window.innerWidth;
            if (canvasWidth < 768) {
                canvasWidth = canvasWidth - 100;
            } else if (canvasWidth > 768 && canvasWidth < 992) {
                canvasWidth = 650;
            } else if (canvasWidth > 992 && canvasWidth < 1200) {
                canvasWidth = 900;
            } else if (canvasWidth > 1200 && canvasWidth < 1400) {
                canvasWidth = 1000;
            }
            else {
                canvasWidth = 1200
            }
            console.log(canvasWidth);
            this.canvas.width = canvasWidth;
            this.canvas.height = 500;
        }, 100);
        
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