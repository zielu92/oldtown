<template>
    <div>
        <div class="row">
            <div class="col-12">
                <input type="range" class="form-control-range" id="formControlRange" name="opacity"
                       min="0" max="1" step ="0.1" v-model="layerOpacity"> {{layerOpacity}}
                <l-map :zoom="zoom" :center="center">
                    <l-tile-layer :url="url" :attribution="attribution" ></l-tile-layer>
                    <v-geosearch :options="geosearchOptions" ></v-geosearch>
                    <l-marker v-for="marker, index in markers" :key="'A'+ index" :lat-lng="marker">
                        <l-popup>
                            <div>
                                I am a popup
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                    sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
                                    Donec finibus semper metus id malesuada.
                                </p>
                            </div>
                        </l-popup>
                    </l-marker>
                    <l-marker :lat-lng="marker" v-if="marker">
                        <l-tooltip :options="{ permanent: true, interactive: true }">
                            <div>
                                I am a tooltip
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                    sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
                                    Donec finibus semper metus id malesuada.
                                </p>
                            </div>
                        </l-tooltip>
                    </l-marker>
                    <l-polyline v-for="polyline, index in polylines" :key="index" :lat-lngs="polyline.latlngs" :color="polyline.color"></l-polyline>
<!--                    <l-image-overlay v-for="image in imageLayers" :key="image.url" :url="image.url" :bounds="image.bounds" :opacity="layerOpacity"></l-image-overlay>-->
                </l-map>
            </div>
        </div>
    </div>
</template>
<script>
import { OpenStreetMapProvider } from 'leaflet-geosearch';
export default {
    props: ['obj_id'],
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
            geosearchOptions: { // Important part Here
                provider: new OpenStreetMapProvider(),
            },
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution:
                '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            zoom: 15,
            center: [51.53128791778799, 20.00830181051791],
            layerOpacity: 0.9,
            imageLayers: [
                {url:'https://d-art.ppstatic.pl/kadry/k/r/62/e5/5ad065ed93fc4_o.jpg', bounds: [[51.535758, 20.000128], [51.523011, 20.015652]]},
                {url:'https://d-art.ppstatic.pl/kadry/k/r/e7/d2/5ad065e06adbc_o.jpg', bounds: [[51.533758, 19.989077], [51.521276, 20.005642]]}
            ],
            task: null,
        };
    },
    created() {
        this.initData();

    },
    methods: {
        async initData() {
            //TODO: try and catch
            //depend on type if type has multiple points take first and assign as center
            let objResponse = '';
            //show single element on the map
            if (this.obj_id) {
                objResponse = await axios.get(`/getmapobject/${this.obj_id}`);
                let coordinate = objResponse.data.coordinate[0];
                let coordinateObject = [coordinate.long, coordinate.lat];
                this.center = this.convertCoordinatesAsObject(coordinate);
                this.marker = this.convertCoordinatesAsObject(coordinate);
            }
            let objsResponse = await axios.get(`/getmapobjects`);
            //add every published element
            objsResponse.data.forEach((mapObj)=> {
                if(objResponse) {
                    //avoid duplicated elements on map
                    if(objResponse.data.id !== mapObj.id) {
                        this.addObjectsToMap(mapObj)
                    }
                } else {
                    this.addObjectsToMap(mapObj)
                }
            });
        },
        addObjectsToMap(mapObj) {
            if(mapObj.type===1) {
                let coordinateObject = [mapObj.coordinate[0].long, mapObj.coordinate[0].lat];
                this.markers.push(coordinateObject)
            }
        },
        convertCoordinatesAsObject(coordinate) {
            return [coordinate.long, coordinate.lat];
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
