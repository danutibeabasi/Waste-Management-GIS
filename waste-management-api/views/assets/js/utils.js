if (!window.wmsUrl) {
  window.wmsUrl = 'http://localhost/cgi-bin/mapserv?';
}

window.fetchData = function(layerName = null, filterType = null, filterValue = null) {
  const layersToFetch = layerName ? [layerName] : ['collection_points', 'treatment_sites' ];

  const fetchPromises = layersToFetch.map(layer => {
    const wmsParams = new URLSearchParams({
      map: '/home/dan/wastemanagement-project/postgis_data_visualization.map',
      service: 'WFS',
      version: '1.1.0',
      request: 'GetFeature',
      typename: layer,
      srsname: 'EPSG:4326',
      outputFormat: 'geojson',
    });

    const url = `${wmsUrl}${wmsParams.toString()}`;

    return fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
      })
      .then(function (data) {
        const features = new ol.format.GeoJSON().readFeatures(data, {
          featureProjection: 'EPSG:3857',
        });

        let filteredFeatures = features;

        if (filterType && filterValue) {
          filteredFeatures = features.filter(feature => {
            const propertyValue = feature.get(filterType);
            return propertyValue && propertyValue.toString() === filterValue;
          });
        }

        return filteredFeatures;
      })
      .catch(function (error) {
        console.error('Error fetching GeoJSON data:', error);
      });
  });

  return Promise.all(fetchPromises);
};


window.handleFilterForm = function(formId, layerName, source) {
  const filterForm = document.getElementById(formId);
  const alreadyHasEventListener = filterForm.hasAttribute('data-has-event-listener');
  if (!alreadyHasEventListener) {
    filterForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const filterType = document.getElementById(`${formId}Options`).value;
      const filterValue = document.getElementById(`${formId}Value`).value;

      if (filterType === 'id' && isNaN(filterValue)) {
        alert('Please enter a valid ID');
        return;
      }

      if (filterType === 'code' && !/^[a-zA-Z0-9]+$/.test(filterValue)) {
        alert('Code must be alphanumeric');
        return;
      }

      if (filterType === 'city' && !/^[a-zA-Z\s]+$/.test(filterValue)) {
        alert('City must only contain letters');
        return;
      }

      if (!filterValue) {
        alert('Please enter a filter value');
        return;
      }

      // Fetch the full feature data again
      window.fetchData(layerName, null, null)
        .then(nestedFeatures => [].concat(...nestedFeatures))
        .then(features => {
          // Apply the filter on the full feature data
          const filteredFeatures = features.filter(feature => {
            const propertyValue = feature.get(filterType);
            return propertyValue && propertyValue.toString() === filterValue;
          });

          source.clear();
          source.addFeatures(filteredFeatures);
        });

    });
    filterForm.setAttribute('data-has-event-listener', 'true');
  }
}
