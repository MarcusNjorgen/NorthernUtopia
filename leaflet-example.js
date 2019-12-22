var map = L.map('map').setView([0, -0], 2);

L.tileLayer('tiles/{z}/{x}/{y}.png', {
		attribution: 'attribution'
}).addTo(map);

