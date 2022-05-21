<template>
    <div class="px-2 col-12">
        <h2>Dodaj marker</h2>
        <p>Jeśli jest to duży objekt np. budynek, to lepiej dodać go jako poligon</p>
        <div class="alert alert-danger" role="alert" v-if="errors.length > 0">
            Proszę podać wymagane informację
        </div>
        <div class="form-group">
            <label for="name">Nazwa *</label>
            <input type="text" class="form-control" id="name" placeholder="Podaj nazwę" v-model="markerArr.name" required>
        </div>
        <div class="form-group">
            <label for="nameOld">Dawna Nazwa (jeśli występuje)</label>
            <input type="text" class="form-control" id="nameOld" placeholder="Podaj dawną nazwę" v-model="markerArr.nameOld">
        </div>
        <div class="form-group">
            <label for="address">Aktualny adres</label>
            <input type="text" class="form-control" id="address" placeholder="np. Mościckiego 12" v-model="markerArr.address">
        </div>
        <div class="form-group">
            <label for="latLng">Koordynaty (kliknij na mapie lub wpisz) *</label>
            <input type="text" class="form-control" id="latLng" placeholder="51.53128791778799, 20.00830181051791" v-model="point" required>
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
        <div class="form-group">
            <label for="description">Opis/Historia</label>
            <textarea class="form-control" id="description" rows="3" v-model="markerArr.description"></textarea>
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
    name: "AddMarker",
    props: ['marker'],
    data() {
        return {
            markerArr: {},
            categories: {},
            errors: [],
        }
    },
    methods: {
        addToService() {
            this.errors = [];

            if (!this.markerArr.name || !this.point || !this.markerArr.category_id) {
                this.errors.push('error');
            }
            if(this.errors.length === 0) {
                this.markerArr.type = '1';
                this.markerArr.latLng = this.point;
                axios.post('/mapobjects', this.markerArr).then(() => {
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
    },
    created() {
      this.getCategories();
    },
    computed: {
       point: function () {
            return this.marker ? `${this.marker.lat}, ${this.marker.lng}` : '';
        }
    }
}
</script>

<style scoped>
 body {
     background-color: white;
 }
</style>
