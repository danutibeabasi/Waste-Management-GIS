// utils.js

export async function fetchData(layerName = 'collection_points', filterType = null, filterValue = null) {
  const wmsUrl = 'http://localhost/cgi-bin/mapserv?';
  const wmsParams = new URLSearchParams({
    map: '/home/dan/wastemanagement-project/postgis_data_visualization.map',
    service: 'WFS',
    version: '1.1.0',
    request: 'GetFeature',
    typename: layerName,
    srsname: 'EPSG:4326',
    outputFormat: 'geojson',
  });

  const url = `${wmsUrl}${wmsParams.toString()}`;

  console.log('Fetching data with URL:', url); // Log the request URL

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const data = await response.json();
    console.log('Received data:', data); // Log the received data

    const features = new ol.format.GeoJSON().readFeatures(data, {
      featureProjection: 'EPSG:3857',
    });

    let filteredFeatures = features;

    // Apply the filter if provided
    if (filterType && filterValue) {
      filteredFeatures = features.filter(feature => {
        const propertyValue = feature.get(filterType);
        return propertyValue && propertyValue.toString() === filterValue;
      });
    }

    return filteredFeatures;
  } catch (error) {
    console.error('Error fetching GeoJSON data:', error);
    return [];
  }
}
