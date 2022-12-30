// Récupération des données à partir du fichier JSON
fetch("https://www.nordicfrance.fr/stations/stations/station_3668.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Hauteur neige max
    // document.getElementById("meteo01").innerHTML =
    //   data.meteo.enneigement.hauteur_neige_max;

    // Ouverture Piste 00 Le pré
    // lePre = data.secteurs[7222].activites[2].pistes[0].nom;
    // document.getElementById("le-pre").innerHTML = lepre;

    // METEO AM
    meteoAM = data.meteo.temps_matin.temperature;
    document.getElementById("météo-am").innerHTML = meteoAM;

    srcImageMeteoAM = data.meteo.temps_matin.picto;
    document.getElementById("image-météo-am").src = srcImageMeteoAM

    // METEO AM
    meteoPM = data.meteo.temps_apres_midi.temperature;
    document.getElementById("météo-pm").innerHTML = meteoPM;

    srcImageMeteoPM = data.meteo.temps_apres_midi.picto;
    imageMeteoPM = document.getElementById("image-météo-pm");
    imageMeteoPM.src = srcImageMeteoPM;


    // PISTES RAQUETTES

    piste00 = data.secteurs[7222].activites[3].pistes[0].ouverture_id;
    if (piste00 == 1) {
      resultPiste00 = 'Fermée';
      document.getElementById("tour-de-montruvel-td").innerHTML = resultPiste00;
    } else {
      resultPiste00 = 'Ouverte';
      document.getElementById("tour-de-montruvel-td").innerHTML = resultPiste00;

      srcImageTourDeMontruvel = "./images/vert.svg"
      document.querySelector(".tour-de-montruvel").src = srcImageTourDeMontruvel
    }

    // Ouverture Piste 01 - Cabane Bleue
    piste01 = data.secteurs[7222].activites[3].pistes[1].ouverture_id;
    if (piste01 == 1) {
      resultPiste01 = 'Fermée';
      document.getElementById("montruvel-1-td").innerHTML = resultPiste01;
    } else {
      resultPiste01 = 'Ouverte';
      document.getElementById("montruvel-1-td").innerHTML = resultPiste00;

      srcImageMontruvel1 = "./images/vert.svg"
      document.querySelector(".montruvel1").src = srcImageMontruvel1
    }

    // Ouverture Piste02 - La Rochaille
    piste02 = data.secteurs[7222].activites[3].pistes[2].ouverture_id;
    if (piste02 == 1) {
      resultPiste02 = 'Fermée';
      document.getElementById("montruvel-2-td").innerHTML = resultPiste02;
    } else {
      resultPist02 = 'Ouverte';
      document.getElementById("montruvel-2-td").innerHTML = resultPiste02;

      srcImageMontruvel2 = "./images/vert.svg"
      document.querySelector(".montruvel-2").src = srcImageMontruvel2
    }

    // Ouverture Piste03 - Cabane Rouge
    piste03 = data.secteurs[7222].activites[3].pistes[3].ouverture_id;
    if (piste03 == 1) {
      resultPiste03 = 'Fermée';
      document.getElementById("cabane-colle-baudet-td").innerHTML = resultPiste03;
    } else {
      resultPiste03 = 'Ouverte';
      document.getElementById("cabane-colle-baudet-td").innerHTML = resultPiste03;

      srcImageCabaneColleBaudet = "./images/vert.svg"
      document.querySelector(".cabane-colle-baudet").src = srcImageCabaneColleBaudet
    }

    // Ouverture piste 06 - Champlatte 
    piste06 = data.secteurs[7222].activites[2].pistes[6].ouverture_id;
    if (piste06 == 1) {
      resultPiste06 = 'Fermée';
      document.getElementById("champlatte-td").innerHTML = resultPiste06;
    } else {
      resultPiste06 = 'Ouverte';
      document.getElementById("champlatte-td").innerHTML = resultPiste06;

      srcImageChamplatte = "./images/vert.svg"
      document.querySelector(".champlatte").src = srcImageChamplatte
    }




  });

// https://www.nordicfrance.fr/stations/stations/station_3668.json - La colle saint michel
// https://www.nordicfrance.fr/stations/stations/station_3040.json - Ratery