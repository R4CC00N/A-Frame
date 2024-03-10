window.addEventListener('DOMContentLoaded', () => {
    addAttributesToWall();
});

function addAttributesToWall() {
    const paredElements = document.getElementsByClassName('pared');
    const vitrinaElements = document.getElementsByClassName('vitrina');
    const techo = document.getElementById('techo');
    const suelo = document.getElementById('suelo');
    if (paredElements.length > 0) {
        for (let i = 0; i < paredElements.length; i++) {
            const pared = paredElements[i];
            pared.setAttribute('src', '#roughnessLadrillo');
            pared.setAttribute('repeat', '15 3');
            pared.setAttribute('normal-map', '#NormalMapLadrillo');
            pared.setAttribute('normal-texture-repeat', '15 3');
            pared.setAttribute('normal-scale', '15 -3');
            pared.setAttribute('roughness', '0.8');
            pared.setAttribute('roughness-map', '#roughnessLadrillo');
            pared.setAttribute('ambient-occlusion-map', '#aoLadrillo');
            pared.setAttribute('ambient-occlusion-map-intensity', '1.5');
            pared.setAttribute('ambient-occlusion-texture-repeat', '15 3');
            pared.setAttribute('color', '#6f6f6f');
            // Add more attributes as needed
        }
    }
    else {
        console.error('No se encontró el elemento con ID "pared".');
    }
    if (techo) {
        techo.setAttribute('src', '#albedoRockVolcan');
        techo.setAttribute('repeat', '6 6');
        techo.setAttribute('normal-map', '#NormalMapRockVolcan');
        techo.setAttribute('normal-texture-repeat', '6 6');
        techo.setAttribute('normal-scale', '6 -6');
        techo.setAttribute('roughness', '0.8');
        techo.setAttribute('roughness-map', '#roughnessRockVolcan');
        techo.setAttribute('ambient-occlusion-map', '#aoRockVolcan');
        techo.setAttribute('ambient-occlusion-map-intensity', '1.5');
        techo.setAttribute('ambient-occlusion-texture-repeat', '6 6');
        techo.setAttribute('color', '#ffffff');
        // Añade más atributos según sea necesario
    }
    else {
        console.error('No se encontró el elemento con ID "techo".');
    }
    if (suelo) {
        suelo.setAttribute('src', '#albedoTerraza');
        suelo.setAttribute('repeat', '8 8');
        suelo.setAttribute('normal-map', '#NormalTerraza');
        suelo.setAttribute('normal-texture-repeat', '8 8');
        suelo.setAttribute('normal-scale', '8 -8');
        suelo.setAttribute('roughness', '0.1');
        suelo.setAttribute('roughness-map', '#roughnessTerraza');
        suelo.setAttribute('color', '#ffffff');
        // Añade más atributos según sea necesario
    } 
    else {
        console.error('No se encontró el elemento con ID "suelo".');
    }
    if (vitrinaElements.length > 0) {
        for (let i = 0; i < vitrinaElements.length; i++) {
            const vitrina = vitrinaElements[i];
            vitrina.setAttribute('src', '#aoRock');
            vitrina.setAttribute('repeat', '1 1');
            vitrina.setAttribute('normal-map', '#NormalMapRock');
            vitrina.setAttribute('normal-texture-repeat', '1 1');
            vitrina.setAttribute('normal-scale', '1 -1');
            vitrina.setAttribute('roughness', '0.5');
            vitrina.setAttribute('roughness-map', '#roughnessRock');
            vitrina.setAttribute('ambient-occlusion-map', '#aoRock');
            vitrina.setAttribute('ambient-occlusion-map-intensity', '1.5');
            vitrina.setAttribute('ambient-occlusion-texture-repeat', '1 1');
            vitrina.setAttribute('color', '#494949');
            // Add more attributes as needed
        }
    }
    else {
        console.error('No se encontró el elemento con ID "vitrina".');
    }
}
