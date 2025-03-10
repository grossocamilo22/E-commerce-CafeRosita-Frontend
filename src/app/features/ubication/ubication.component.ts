import { Component } from '@angular/core';
import * as Leaflet from 'leaflet';
@Component({
  selector: 'app-ubication',
  templateUrl: './ubication.component.html',
  styleUrls: ['./ubication.component.scss']
})
export class UbicationComponent {
  options: Leaflet.MapOptions = {
    layers: getLayers(),
    zoom: 12,
    center: new Leaflet.LatLng(3.492360, -76.207749)
  };
}

export const getLayers = (): Leaflet.Layer[] => {
  return [
    new Leaflet.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    } as Leaflet.TileLayerOptions),
    ...getMarkers()
  ] as Leaflet.Layer[];
};
export const getMarkers = (): Leaflet.Marker[] => {
  return [
    new Leaflet.Marker(new Leaflet.LatLng(3.492360, -76.207749), {
      icon: new Leaflet.Icon({
        iconSize: [50, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/green-marker.png',
      }),
      title: 'Workspace'
    } as Leaflet.MarkerOptions),
  ] as Leaflet.Marker[];
};