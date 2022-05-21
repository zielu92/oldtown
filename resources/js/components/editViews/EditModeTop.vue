<template>
    <div class="col-12">
        <div class="row">
            <div class="col-12 pb-2 mx-3 text-center">
                <button class="btn btn-lg btn-primary" @click="emitTask('addMarker')"><i class="bi bi-geo-alt-fill"></i>Dodaj Marker</button>
                <button class="btn btn-lg btn-secondary" @click="emitTask('addLayer')"><i class="bi bi bi-layers-fill"></i>Dodaj Warstwe</button>
                <button class="btn btn-lg btn-success" @click="emitTask('addPolygon')"><i class="bi bi-bounding-box-circles"></i>Dodaj Poligon</button>
                <button class="btn btn-lg btn-warning" @click="emitTask('addPolyline')"><i class="bi bi-signpost"></i>Dodaj Linie</button>
                <button class="btn btn-lg btn-outline-danger" @click="emitTask('addPicture')"><i class="bi bi-file-image-fill"></i>Dodaj Zdjęcie</button>
                <button class="btn btn-lg btn-outline-dark" @click="emitTask('addHistory')"><i class="bi bi-hourglass-bottom"></i>Dodaj historie</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EditMode",
    methods: {
        emitTask(task) {
            this.$emit('update-task', task)
        }
    }
}
</script>

<style scoped>

</style>
