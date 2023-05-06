const hyperleafletCodeContainer = document.getElementById("hyperleaflet-code")
const hyperleafletHTMLCode = `
<div id="map"
data-center="39.73, 39.99"
data-zoom="5"
...
>
<div 
data-tile="OpenStreetMap">
</div>
<div 
data-tile="EsriWorldImagery">
</div>
</div>
`

shiki
.getHighlighter({
	theme: 'nord'
})
.then(highlighter => {
	const code = highlighter.codeToHtml(hyperleafletHTMLCode, { lang: 'html' })
	hyperleafletCodeContainer.innerHTML = code
})





const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(map);

