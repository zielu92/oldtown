<template>
    <div class="px-2 col-12">
        <h2>Dodaj warstwe</h2>
        <p>Jeśli jest to duży objekt np. budynek, to lepiej dodać go jako poligon</p>
        <div class="alert alert-danger" role="alert" v-if="errors.length > 0">
            Proszę podać wymagane informację
        </div>
        <div class="form-group">
            <label for="name">Nazwa *</label>
            <input type="text" class="form-control" id="name" placeholder="Podaj nazwę" v-model="markerArr.name" required>
        </div>
        <div class="form-group">
            <label for="latLng">Obraz warstwy</label><br />
            <input type="file" @change="onFileChange" />
        </div>
        <div class="form-group">
            <label for="latLng">Koordynaty (kliknij na mapie lub wpisz) *</label>
            <input type="text" class="form-control" id="latLng" placeholder="51.53128791778799, 20.00830181051791" v-model="pointA" required>
            <input type="text" class="form-control" id="latLng2" placeholder="51.53028791778799, 20.00330181051791" v-model="pointB" required>
        </div>
        <div class="form-group">
            <label for="category">Kategoria *</label>
            <select class="form-control" id="category" v-model="markerArr.category_id" required>
                <option v-for="(value, name, index) in categories" :key="index" :value="value">{{name}}</option>
            </select>
        </div>
        <div class="form-group row">
            <div class="col-12">Data istnienia</div>
            <div class="col-6">
                <label for="from">od</label>
                <input type="number" class="form-control" id="from" placeholder="1820" v-model="markerArr.from">
            </div>
            <div class="col-6">
                <label for="till">do</label>
                <input type="number" class="form-control" id="till" placeholder="2022" v-model="markerArr.till">
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <button type="submit" :class="['btn', errors.length > 0 ? 'btn-danger' : 'btn-primary', 'm-2', 'text-right']" @click="addToService()">Dodaj</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddLayer",
    props: ['bounds'],
    data() {
        return {
            markerArr: {},
            categories: {},
            errors: [],
            imgUrl: null,
            file: ''
        }
    },
    methods: {
        addToService() {
            this.errors = [];

            if (!this.markerArr.name || !this.pointA || !this.file || !this.pointB || !this.markerArr.category_id) {
                this.errors.push('error');
            }
            if(this.errors.length === 0) {
                let data = new FormData();
                data.append('file', this.file);
                data.append('type', 2);
                data.append('name', this.markerArr.name);
                data.append('category_id', this.markerArr.category_id);
                data.append('latLng', [this.pointA, this.pointB]);
                data.append('from', this.markerArr.from ? this.markerArr.from : '');
                data.append('till', this.markerArr.till ? this.markerArr.till : '');
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }
                axios.post('/mapobjects', data, config).then(() => {
                    this.$emit('add');
                    this.markerArr = {};
                });
            } else {

            }
        },
        getCategories() {
            axios.get('/getcategories').then((response)=>{
                this.categories = response.data;
            });
        },
        onFileChange(e) {
            const file = e.target.files[0];
            this.file = file;
            this.url = URL.createObjectURL(file);
            this.$emit('img', this.url);
        },
    },
    created() {
        this.getCategories();
    },
    computed: {
        pointA: function () {
            return this.bounds[0] ? `${this.bounds[0].lat}, ${this.bounds[0].lng}` : '';
        },
        pointB: function () {
            return this.bounds[1] ? `${this.bounds[1].lat}, ${this.bounds[1].lng}` : '';
        }
    }
}
</script>

<style scoped>
body {
    background-color: white;
}
</style>
