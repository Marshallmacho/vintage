<template>
    <div class="contacts_map">
        <div class="row">
            <div class="left">
                <div class="title">
                    Our Offices
                </div>



                <tabs :options="{ useUrlFragment: false }" @clicked="tabClicked">
                        <tab name="kiev" >
                            <div class="tap_title">
                                Global Message Services Ukraine LLC
                            </div>
                            <div class="tab_content">
                                <p>Kuiv, Stepan Bandera, 33</p>
                                <p>02066</p>
                                <p>Ukraine</p>
                            </div>
                        </tab>


                        <tab name="moscow">
                            <div class="tap_title">
                                Global Message Services Ukraine LLC
                            </div>
                            <div class="tab_content">
                                <p>Kuiv, Podil, 45</p>
                                <p>020246</p>
                                <p>Ukraine</p>
                            </div>
                        </tab>




                    <tab name="new-york">
                        <div class="tap_title">
                            Global Message Services Ukraine LLC
                        </div>
                        <div class="tab_content">
                            <p>Kuiv, Poznyaky, 14</p>
                            <p>020140</p>
                            <p>Ukraine</p>
                        </div>
                    </tab>
                </tabs>
            </div>

            <div class="right">
                <GoogleMap ></GoogleMap>

            </div>
        </div>


    </div>
</template>

<script>
    import GoogleMap from '../Contacts/Map/GoogleMap'
    import GoogleMap2 from '../Contacts/Map/GoogleMap'

    export default {
        name: "ContactMap",
        components:{GoogleMap,GoogleMap2},
        data(){
            return{
                tabs: [],
                activeTabHash: '',
                activeTabIndex: 0,
                lastActiveTabHash: '',

            }
        },

        methods: {
            tabClicked () {
            },

        }
    }

</script>

<style scoped>
    .contacts_map{
        background-image: url("../../assets/images/patt_map.png");
    }


</style>