<template>
    <div class="map">
        <GmapMap
                :center="center"
                :zoom="12"
                :options="options"
                map-type-id="terrain"
                style="width: 100%; height: 100%"
                icon="https://www.google.dk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        >
            <GmapMarker
                    :position="position"
                    :clickable="true"
                    :draggable="true"
                    :icon="{ url: require('../../../assets/images/mark.png')}"

            ></GmapMarker>
        </GmapMap>

    </div>
</template>

<script>
    import mapStyle from '../../../assets/map/googleMapStyle'
    export default {
        name: "GoogleMap",
        data(){
            return{
                name: 'map',
                options: {
                    disableDefaultUI: true,
                    scrollwheel: false,
                    styles: mapStyle
                },
                center: { lat: 50.4400630, lng: 30.5241037 },
                position: { lat: 50.4400630, lng: 30.5241037  },
                currentPlace: null
            }
        }
    }
</script>

<style scoped>
    .map{
        width: 635px;
        height: 600px;

    }
</style>