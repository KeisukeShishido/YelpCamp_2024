
// const mmm = JSON.parse(campground)

// mapboxgl.accessToken = mapToken;
// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/streets-v11', // style URL
//     center: campground.geometry.coordinates, // starting position [lng, lat]
//     zoom: 8 // starting zoom
// });

// new mapboxgl.Marker()
//     .setLngLat([-74.5,40])
//     .add(map);

const mmm = JSON.parse(campground)

mapboxgl.accessToken = mapToken
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: mmm.geometry.coordinates, // starting position [lng, lat]
    zoom: 8 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());


const marker1 = new mapboxgl.Marker()
    .setLngLat(mmm.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 10 })
        .setHTML(`<h6>${mmm.title}</h6><p>${mmm.location}</p>`)
    )
    .addTo(map)

// const marker1 = new mapboxgl.Marker()
//     .setLngLat(mmm.geometry.coordinates)
//     .setPopup(
//         new mapboxgl.Popup({ offset: 10 }).setHTML(
//             `<h6>${mmm.title}</h6><p>${mmm.location}</p>`)
//     )
//     .addTo(map)

//     const mmm = JSON.parse(campground)

// mapboxgl.accessToken = mapbox
// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/streets-v11', // style URL
//     center: mmm.geometry.coordinates, // starting position [lng, lat]
//     zoom: 8 // starting zoom
// });

// const marker1 = new mapboxgl.Marker()
//     .setLngLat(mmm.geometry.coordinates)
//     .setPopup(
//         new mapboxgl.Popup({ offset: 10 }).setHTML(
//             `<h6>${mmm.title}</h6><p>${mmm.location}</p>`)
//     )
//     .addTo(map)