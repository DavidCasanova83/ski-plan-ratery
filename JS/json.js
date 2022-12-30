// Récupération des données à partir du fichier JSON
fetch("https://www.nordicfrance.fr/stations/stations/station_3040.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Hauteur neige max
    // document.getElementById("meteo01").innerHTML =
    //   data.meteo.enneigement.hauteur_neige_max;

    // Ouverture Piste 00 Le pré
    // lePre = data.secteurs[7222].activites[2].pistes[0].nom;
    // document.getElementById("le-pre").innerHTML = lepre;
    piste00 = data.secteurs[3049].activites[2].pistes[0].ouverture_id;
    if (piste00 == 1) {
      resultPiste00 = 'Fermée';
      document.getElementById("la-source-td").innerHTML = resultPiste00;
    } else {
      resultPiste00 = 'Ouverte';
      document.getElementById("la-source-td").innerHTML = resultPiste00;

      srcImageLaSource = "./images/vert.svg"
      document.querySelector(".la-source-img").src = srcImageLaSource
    }

    piste01 = data.secteurs[3049].activites[2].pistes[1].ouverture_id;
    if (piste01 == 1) {
      resultPiste01 = 'Fermée';
      document.getElementById("le-refuge-td").innerHTML = resultPiste01;
    } else {
      resultPiste01 = 'Ouverte';
      document.getElementById("le-refuge-td").innerHTML = resultPiste01;

      srcImageLeRefuge = "./images/vert.svg"
      document.querySelector(".le-refuge-img").src = srcImageLeRefuge;
    }

    piste02 = data.secteurs[3049].activites[2].pistes[2].ouverture_id;
    if (piste02 == 1) {
      resultPiste02 = 'Fermée';
      document.getElementById("eyguine-td").innerHTML = resultPiste02;
    } else {
      resultPiste02 = 'Ouverte';
      document.getElementById("eyguine-td").innerHTML = resultPiste02;

      srcImageEyguine = "./images/vert.svg"
      document.querySelector(".eyguine-img").src = srcImageEyguine;
    }

    piste03 = data.secteurs[3049].activites[2].pistes[3].ouverture_id;
    if (piste03 == 1) {
      resultPiste03 = 'Fermée';
      document.getElementById("la-reyniere-td").innerHTML = resultPiste03;
    } else {
      resultPiste03 = 'Ouverte';
      document.getElementById("la-reyniere-td").innerHTML = resultPiste03;

      srcImageLaReyniere = "./images/vert.svg"
      document.querySelector(".la-reyniere-img").src = srcImageLaReyniere;
    }

    // METEO AM
    meteoAM = data.meteo.temps_matin.temperature;
    document.getElementById("météo-am").innerHTML = meteoAM;

    srcImageMeteoAM = data.meteo.temps_matin.picto;
    document.getElementById("image-météo-am").src = srcImageMeteoAM;

    // METEO AM
    meteoPM = data.meteo.temps_apres_midi.temperature;
    document.getElementById("météo-pm").innerHTML = meteoPM;

    srcImageMeteoPM = data.meteo.temps_apres_midi.picto;
    imageMeteoPM = document.getElementById("image-météo-pm");
    imageMeteoPM.src = srcImageMeteoPM;

  });

// https://www.nordicfrance.fr/stations/stations/station_3668.json - La colle saint michel
// https://www.nordicfrance.fr/stations/stations/station_3040.json - Ratery