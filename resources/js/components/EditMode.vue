<template>
    <div>
        <edit-mode-top @update-task="updateTask"/>
        <div class="row">
            <div class="col-3">
                <add-marker v-if="task==='addMarker'" :marker="marker" @add="initData"></add-marker>
                <add-layer v-else-if="task==='addLayer'" :bounds="imageLayer.bounds" @add="initData" @img="addLayerImage"></add-layer>
                <edit-mode-side v-else/>
            </div>
            <div class="col-9">
                <input type="range" class="form-control-range" id="formControlRange" name="opacity"
                       min="0" max="1" step ="0.1" v-model="layerOpacity"> {{layerOpacity}}
                <l-map :zoom="zoom" :center="center" @click="addSomething">
                    <l-tile-layer :url="url" :attribution="attribution" ></l-tile-layer>
                    <v-geosearch :options="geosearchOptions" ></v-geosearch>
                    <l-marker v-for="marker, index in markers" :key="index" :lat-lng="marker" @click="removeMarker(index)"></l-marker>
                    <l-marker :lat-lng="marker" v-if="marker"></l-marker>
                    <l-polyline v-for="polyline, index in polylines" :key="index" :lat-lngs="polyline.latlngs" :color="polyline.color" @click="removePolyline(index)"></l-polyline>
                    <l-image-overlay v-if="!!imageLayer.url" :url="imageLayer.url" :bounds="imageLayer.bounds" :opacity="layerOpacity"></l-image-overlay>
<!--                    <l-image-overlay v-for="image in imageLayers" :key="image.url" :url="image.url" :bounds="image.bounds" :opacity="layerOpacity"></l-image-overlay>-->
                </l-map>
            </div>
        </div>
    </div>
</template>

<script>
import { OpenStreetMapProvider } from 'leaflet-geosearch';
export default {
    name: "EditMode",
    data () {
        return {
            polylines: [
                {
                    latlngs: [],
                    color: 'green'
                }
            ],
            markers: [],
            marker: '',
            clickCounter: 0,
            geosearchOptions: { // Important part Here
                provider: new OpenStreetMapProvider(),
            },
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution:
                '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            zoom: 15,
            center: [51.53128791778799, 20.00830181051791],
            layerOpacity: 0.9,
            layerImage: '',
            imageLayers: [
                {url:'https://d-art.ppstatic.pl/kadry/k/r/62/e5/5ad065ed93fc4_o.jpg', bounds: [[51.535758, 20.000128], [51.523011, 20.015652]]},
                {url:'https://d-art.ppstatic.pl/kadry/k/r/e7/d2/5ad065e06adbc_o.jpg', bounds: [[51.533758, 19.989077], [51.521276, 20.005642]]}
            ],
            imageLayer: {'url': '', bounds: []},
            task: null,
        };
    },
    methods: {
        initData() {
          //
        },
        addSomething(event) {
            this.clickCounter++;
            if(this.task==='addMarker') {
                this.marker = event.latlng;
            } else if(this.task==='addLayer') {
                if(this.clickCounter%2===1) {
                     this.imageLayer.bounds = [event.latlng];
                } else {
                    this.imageLayer.bounds.push(event.latlng);
                }

                //check if URL of image exists
                //check if bounds exists
                //add
                // this.imageLayers = {
                //
                // }
            } else {
                this.addPolyline(event);
            }
        },
        removeMarker(index) {
            this.markers.splice(index, 1);
        },
        addMarker(event) {
            this.markers.push(event.latlng);
        },
        addLayerImage(event) {
            !!this.imageLayer.url ? this.imageLayer = {'url': event} : this.imageLayer.url = event;
        },
        addPolyline(event) {
            this.polylines[0].latlngs.push([event.latlng.lat, event.latlng.lng])
        },
        updateTask(event) {
            this.task = event;
        },
    },
    watch: {
        task: function(val) {
            //reset counter on changed task
            if (val) {
                this.clickCounter=0;
            }
        }
    }
}
</script>
<style scoped>
.vue2leaflet-map {
    height: 90vh;
    width: 100%;
}
</style>
