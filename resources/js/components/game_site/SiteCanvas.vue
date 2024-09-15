<template>
    <div>
        <canvas
            id="siteCanvas"
            class="drowing-canvas"
        >
        </canvas>
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
                }
            };
        },
        methods: {
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
            clearMap() {
                this.drowingContext.fillStyle = '#ffffff';
                this.drowingContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.drowingContext.fillRect(0, 0, this.canvas.width, this.canvas.height);
            },
            setUpCanvas() {
                setTimeout(() => {
                    this.localMapData = this.mapDrowData;
                    this.canvas = document.getElementById("siteCanvas");
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
            },
            drowLine(line) {
                if (line && line.path) {
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
            },
        },
        watch: {
            moduleIndex(newIndex) {
                this.setUpCanvas();
            }
        },
        mounted() {
            setTimeout(() => {
                this.localMapData = this.mapDrowData;
                this.canvas = document.getElementById("siteCanvas");
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
    }
</script>

<style scoped>
    .drowing-canvas {
        margin: 20px;
        box-shadow: -3px 2px 9px 6px black;
    }
</style>