<template>
    <div>
        <div class="tool-container">
            <div class="m-3 button-container">
                <button type="button" class="btn btn-outline-success" @click="saveMap">
                    Mentés
                </button>
                <button v-if="!fromSite" type="button" class="btn btn-outline-secondary ms-3" @click="deleteMap">
                    Törlés
                </button>
            </div>

            <div class="color-options">
                <div class="ms-3 ps-1 border-start border-dark border-2">
                    <p class="mt-2 mb-0 ms-2">szinek:</p>
                    <span
                        class="color-field"
                        style="background-color: #000000"
                        @click="selectedColor='#000000'"
                    ></span>
                    <span
                        class="color-field"
                        style="background-color: #1d1a1a"
                        @click="selectedColor='#1d1a1a'"
                    ></span>
                    <span
                        class="color-field"
                        style="background-color: #ffffff"
                        @click="selectedColor='#ffffff'"
                    ></span>
                    <input
                        type="color"
                        class="color-input"
                        v-model="selectedColor"
                    />
                </div>
                <div class="ms-3 ps-1 border-start border-dark border-2">
                    <p class="mt-2 mb-0 ms-2">ecset:</p>
                    <input
                        type="range"
                        min="1"
                        max="20"
                        class="range-input"
                        v-model="drowSize"
                    />
                    <input
                        type="number"
                        maxlength="2"
                        v-model="drowSize"
                        class="number-input"
                        readonly
                    />
                    <span
                        v-bind:style="{
                            width: drowSize + 'px',
                            height: drowSize + 'px',
                            backgroundColor: selectedColor,
                        }"
                        class="drow-size-show"
                    ></span>
                </div>
            </div>
        </div>
        <div class="d-flex align-items-start p-2 border border-secondary rounded">
            <div class="border-right border-secondary p-2 mr-1">
                <p>Bélyegek</p>
                <p>
                    <input
                        type="range"
                        min="0.5"
                        max="3"
                        step="0.1"
                        class="range-input"
                        v-model="stampSize"
                    />
                </p>
                <p>
                    <input
                        type="number"
                        v-model="stampSize"
                        class="number-input"
                        readonly
                    />
                </p>
            </div>
            <div class="d-flex align-items-end flex-wrap">
                <div class="border border-secondary rounded">
                    <div class="d-flex align-items-end">
                        <div class="m-1 p-2 border border-secondary rounded">
                            <img src="/img/stamps/montain1.png" alt="montain1">
                        </div>
                        <div class="m-1 p-2 border border-secondary rounded">
                            <img src="/img/stamps/montain2.png" alt="montain2">
                        </div>
                        <div class="m-1 p-2 border border-secondary rounded">
                            <img src="/img/stamps/montain3.png" alt="montain3">
                        </div>
                        <div class="m-1 p-2 border border-secondary rounded">
                            <img src="/img/stamps/montain4.png" alt="montain4">
                        </div>
                    </div>
                </div>
                
                <div class="m-1 p-2 border border-secondary rounded">
                    <img src="/img/stamps/tree1.png" alt="tree1">
                </div>
                <div class="m-1 p-2 border border-secondary rounded">
                    <img src="/img/stamps/tree2.png" alt="tree2">
                </div>
                <div class="m-1 p-2 border border-secondary rounded">
                    <img src="/img/stamps/tree3.png" alt="tree3">
                </div>
                <div class="m-1 p-2 border border-secondary rounded">
                    <img src="/img/stamps/tree4.png" alt="tree4">
                </div>
                <div class="m-1 p-2 border border-secondary rounded">
                    <img src="/img/stamps/tree5.png" alt="tree5">
                </div>
                <div class="m-1 p-2 border border-secondary rounded">
                    <img src="/img/stamps/tree6.png" alt="tree6">
                </div>

                <div class="m-1 p-2 border border-secondary rounded">
                    <img src="/img/stamps/animal1.png" alt="animal1">
                </div>
                <div class="m-1 p-2 border border-secondary rounded">
                    <img src="/img/stamps/animal2.png" alt="animal2">
                </div>
                <div class="m-1 p-2 border border-secondary rounded">
                    <img src="/img/stamps/animal3.png" alt="animal3">
                </div>
                <div class="m-1 p-2 border border-secondary rounded">
                    <img src="/img/stamps/animal4.png" alt="animal4">
                </div>
                <div class="m-1 p-2 border border-secondary rounded">
                    <img src="/img/stamps/animal5.png" alt="animal5">
                </div>
                <div class="m-1 p-2 border border-secondary rounded">
                    <img src="/img/stamps/animal6.png" alt="animal6">
                </div>
                <div class="m-1 p-2 border border-secondary rounded">
                    <img src="/img/stamps/animal7.png" alt="animal7">
                </div>
                <div class="m-1 p-2 border border-secondary rounded">
                    <img src="/img/stamps/animal8.png" alt="animal8">
                </div>
                <div class="m-1 p-2 border border-secondary rounded">
                    <img src="/img/stamps/animal9.png" alt="animal9">
                </div>
                <div class="m-1 p-2 border border-secondary rounded">
                    <img src="/img/stamps/animal10.png" alt="animal10">
                </div>
            </div>
            <div>

            </div>
        </div>
        <div>
            <canvas
                :id="canvasId"
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
            default: () => {
                return [];
            },
        },
        canvasId: {
            type: String,
            default: "canvas",
        },
        fromSite: {
            type: Boolean,
            default: false
        },
        moduleIndex: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            localMapData: [],
            drowSize: 2,
            selectedColor: "rgb(0, 0, 0)",
            isDrowing: false,
            drowingContext: null,
            canvas: null,
            currentLine: {
                startX: 0,
                startY: 0,
                size: 2,
                color: '#000000',
                path: []
            },
            stamp: false,
            stampSize: 1,
        };
    },
    computed: {},
    methods: {
        drowStart(e) {
            if (this.stamp) {

            } else {
                this.isDrowing = true;
                this.drowingContext.beginPath();
                this.drowingContext.moveTo(
                    e.clientX - (e.clientX - e.offsetX),
                    e.clientY - (e.clientY - e.offsetY)
                );
                this.currentLine.startX = e.clientX - (e.clientX - e.offsetX);
                this.currentLine.startY = e.clientY - (e.clientY - e.offsetY);
                this.currentLine.size = this.drowSize;
                this.currentLine.color = this.selectedColor;
            }
            e.preventDefault();
        },
        drowing(e) {
            if (this.isDrowing) {
                this.drowingContext.lineTo(
                    e.clientX - (e.clientX - e.offsetX),
                    e.clientY - (e.clientY - e.offsetY)
                );
                this.drowingContext.strokeStyle = this.selectedColor;
                this.drowingContext.lineWidth = this.drowSize;
                this.drowingContext.lineCap = "round";
                this.drowingContext.lineJoin = "round";
                this.drowingContext.stroke();
                 let point = {
                    x: e.clientX - (e.clientX - e.offsetX),
                    y: e.clientY - (e.clientY - e.offsetY)
                };
                this.currentLine.path.push(point);
            }
            e.preventDefault();
        },
        drowEnd(e) {
            if (this.isDrowing) {
                this.drowingContext.stroke();
                this.drowingContext.closePath();
                this.isDrowing = false;
                this.localMapData.push(this.currentLine);
                this.$root.$emit('CanvasDrow', this.currentLine);
                this.currentLine = {
                    startX: 0,
                    startY: 0,
                    size: 2,
                    color: '#000000',
                    path: []
                };
            }
            if (this.stamp) {
                this.stamp = false;
            }
            e.preventDefault();
        },
        drowMap() {
            if (this.localMapData) {
                this.localMapData.forEach(line => {
                    if (line.path) {
                        this.drowingContext.beginPath();
                        this.drowingContext.moveTo(
                            line.startX,
                            line.startY
                        );
                        line.path.forEach(point => {
                            this.drowingContext.lineTo(
                                point.x,
                                point.y
                            );
                            this.drowingContext.strokeStyle = line.color;
                            this.drowingContext.lineWidth = line.size;
                            this.drowingContext.lineCap = "round";
                            this.drowingContext.lineJoin = "round";
                            this.drowingContext.stroke();
                        });
                        this.drowingContext.stroke();
                        this.drowingContext.closePath();
                    }
                });
            }
        },
        saveMap() {
            this.$emit('save', this.localMapData);
        },
        deleteMap() {
            this.localMapData = [];
            this.drowingContext.fillStyle = '#ffffff';
            this.drowingContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.drowingContext.fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.$emit('save', this.localMapData);
        },
        clearMap() {
            this.drowingContext.fillStyle = '#ffffff';
            this.drowingContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.drowingContext.fillRect(0, 0, this.canvas.width, this.canvas.height);
        },
        setUpCanvas() {
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
                } else {
                    canvasWidth = 1200;
                }
                this.canvas.width = canvasWidth;
                this.canvas.height = 500;
                this.clearMap();
                this.drowMap();
            }, 100);
        }
    },
    watch: {
        moduleIndex(newIndex) {
            this.setUpCanvas();
        }
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
            } else {
                canvasWidth = 1200;
            }
            this.canvas.width = canvasWidth;
            this.canvas.height = 500;
            this.drowMap();
        }, 120);
    },
};
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
