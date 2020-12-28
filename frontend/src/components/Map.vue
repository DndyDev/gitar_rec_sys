<template>

            <div class="folium-map" id="map_72d7d6fe316d41a59b1f5ef905b40580" ></div>
    </template>
<script>

            var map_72d7d6fe316d41a59b1f5ef905b40580 = L.map(
                "map_72d7d6fe316d41a59b1f5ef905b40580",
                {
                    center: [55.7904, 49.1213],
                    crs: L.CRS.EPSG3857,
                    zoom: 10,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );





            var tile_layer_a663876b65ef4e39af0879c6b7002e2e = L.tileLayer(
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                {"attribution": "Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://www.openstreetmap.org/copyright\"\u003eODbL\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_72d7d6fe316d41a59b1f5ef905b40580);


            var marker_d08e648828a3407d967829f6b6b42e2b = L.marker(
                [55.837035528049526, 49.0795868834611],
                {}
            ).addTo(map_72d7d6fe316d41a59b1f5ef905b40580);


        var popup_cd1966e24dc44d8596656d1bbb722366 = L.popup({"maxWidth": "100%"});


            var html_59b69101f01e459e93f27aefd765aca5 = $(`<div id="html_59b69101f01e459e93f27aefd765aca5" style="width: 100.0%; height: 100.0%;">GC Alhambra</div>`)[0];
            popup_cd1966e24dc44d8596656d1bbb722366.setContent(html_59b69101f01e459e93f27aefd765aca5);


        marker_d08e648828a3407d967829f6b6b42e2b.bindPopup(popup_cd1966e24dc44d8596656d1bbb722366)
        ;




            marker_d08e648828a3407d967829f6b6b42e2b.bindTooltip(
                `<div>
                     Here will help you find a guitar for you
                 </div>`,
                {"sticky": true}
            );


            var marker_75924f4608574147a28cbd61534d4dd6 = L.marker(
                [55.789623355024354, 49.156236140232856],
                {}
            ).addTo(map_72d7d6fe316d41a59b1f5ef905b40580);


        var popup_da30d5abdbe74a24b566e7f746dc71a8 = L.popup({"maxWidth": "100%"});


            var html_9dd6e971119e4da3a8a9a848d6e107e1 = $(`<div id="html_9dd6e971119e4da3a8a9a848d6e107e1" style="width: 100.0%; height: 100.0%;">Mustorg</div>`)[0];
            popup_da30d5abdbe74a24b566e7f746dc71a8.setContent(html_9dd6e971119e4da3a8a9a848d6e107e1);


        marker_75924f4608574147a28cbd61534d4dd6.bindPopup(popup_da30d5abdbe74a24b566e7f746dc71a8)
        ;




            marker_75924f4608574147a28cbd61534d4dd6.bindTooltip(
                `<div>
                     Guitars store
                 </div>`,
                {"sticky": true}
            );

</script>


<script>
    export default {
        name: "Map"
    }
</script>

<style scoped>

</style>