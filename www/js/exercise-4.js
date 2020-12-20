/**
 * #############################
 * ##  E J E R C I C I O   4  ##
 * #############################
 *
 * Obtener un array con los nombres de todos los municipios de la provincia de Lugo (Galicia)
 * ordenados por orden alfabético inverso (de la Z a la A). Deberás hacer uso de fetch y
 * async / await.
 *
 * Para facilitarte esta tarea dispones de la siguiente API: https://www.el-tiempo.net/api
 *
 * Debes entrar en la web y leer la documentación para encontrar la URL que necesitas. En
 * este caso es bastante simple e intuitivo. ¡A por todas! ;)
 *
 */

'use strict';

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function getMunicipalities() {
  const municipalitiesNames = [];
  const data = await fetchData('https://www.el-tiempo.net/api/json/v2/provincias/27/municipios');
  const municipalities = data.municipios;
  for (const municipality of municipalities) {
    municipalitiesNames.push(municipality.NOMBRE);
  }

  return municipalitiesNames.sort(function (a, b) {
    if (a > b) {
      return -1;
    }
  });
}

getMunicipalities();
