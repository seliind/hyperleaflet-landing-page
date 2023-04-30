const importCode = document.getElementById("import-code")
const originalHTML = 
`<!-- import leaflet -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
<script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js">
/>
<!-- import hyperleaflet -->
<script defer src="https://www.unpkg.com/hyperleaflet@0.2.3"></script>
`
const html = hljs.highlightAuto(originalHTML).value
console.log(html)
importCode.innerHTML = html