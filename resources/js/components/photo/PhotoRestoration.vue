<template>
    <div class="container px-4 px-lg-5 my-5">
        <div class="row gx-4 gx-lg-5 align-items-center">
            <div class="col-md-12">
                <img-comparison-slider v-if="colorFile">
                    <img slot="before" :src="colorFile" />
                    <img slot="after" :src="previewImage" :width="colorFile.width" :height="colorFile.height"/>
                </img-comparison-slider>
            </div>
            <div class="col-md-12">
                <div class="small mb-1">based on deep.ai, model by Jason Antic
                </div>
                <h1 class="display-5 fw-bolder">Koloryzuj swoje stare zdjęcia</h1>
                <p class="lead">
                    Wystarczy wybrać zdjęcie używając formularza poniżej i poczekać aż process zostanie zakończony.
                </p>
                <div class="d-flex">
                    <input type="file" :disabled="isLoading" v-show="!isLoading" @change="previewFiles"
                           accept="image/*" class="input-file">
                    <p v-if="isLoading">
                        Koloryzacja....
                    </p>
                    <button class="btn btn-primary" v-if="!isEmpty" v-show="!isLoading" @click="colorPhoto" >Koloryzuj</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    name: "PhotoRestoration",
    data() {
        return {
            isEmpty: true,
            isLoading: false,
            imageFile: {},
            colorFile: '',
            previewImage: null
        }
    },
    mounted() {
        const plugin = document.createElement("script");
        plugin.setAttribute(
            "src",
            "//unpkg.com/img-comparison-slider@3/dist/component/component.esm.js"
        );
        plugin.setAttribute(
            "src",
            "//unpkg.com/img-comparison-slider@3/dist/component/component.js"
        );
        plugin.async = true;
        document.head.appendChild(plugin);
    },
    methods: {
        previewFiles(event) {
            this.isEmpty = false;
            this.imageFile = event.target.files[0];
            this.previewImage = URL.createObjectURL(this.imageFile)
        },
        colorPhoto() {
            this.isLoading = true;
            const headers = {
                "api-key": "quickstart-QUdJIGlzIGNvbWluZy4uLi4K",
                'Content-Type': 'multipart/form-data'
            }
            let formData = new FormData();
            formData.append('image', this.imageFile);
            axios.post('https://api.deepai.org/api/colorizer', formData, {headers})
                .then(response => {
                    this.colorFile = response.data.output_url;
                    this.isLoading = false;
                    this.isEmpty = true;
                    this.imageFile = {};
                });

        }
    }
}
</script>

<style scoped>
@import 'https://unpkg.com/img-comparison-slider@3/dist/collection/styles/initial.css';
</style>
