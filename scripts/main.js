const hyperleafletCodeContainer = document.querySelector("#hyperleaflet-code")
const importCodeContainer = document.querySelector("#import-code")

const nextButton = document.querySelector("#next-step")
const prevButton = document.querySelector("#prev-step")



const importCode =
	`<!-- import leaflet -->
<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css"
<script src="https://unpkg.com/leaflet/dist/leaflet.js">

<!-- import hyperleaflet -->
<script defer src="https://www.unpkg.com/hyperleaflet@0.2.3"></script>
`


const shikiHighlighter = shiki.getHighlighter({ theme: 'nord', langs: ['html', 'javascript'] })
let currentStep = 0

const hyperleafletCodes = {
	1: `<div id="map">`,
	2: `<div id="map"
	data-center="39.73, 39.99"
	>

	`,
	3: `<div id="map"
	data-center="39.73, 39.99"
	data-zoom="5"
	>
	`
}


nextButton.addEventListener("click", () => {
	nextStep()
})

function nextStep() {
	shikiHighlighter.then(highlighter => {
		const code = highlighter.codeToHtml(hyperleafletCodes[currentStep], { lang: 'html' })
		hyperleafletCodeContainer.innerHTML = code
	})

	currentStep += 1

}

const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(map);


document.addEventListener("DOMContentLoaded", function (event) {
	nextStep()

	shikiHighlighter.then(highlighter => {
		const code = highlighter.codeToHtml(importCode, { lang: 'html' })
		importCodeContainer.innerHTML = code
	})
});

