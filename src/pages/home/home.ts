import { Component } from '@angular/core';
import 'leaflet';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	ngOnInit(): void {
   		var map = L.map('map_content').setView([51.505, -0.09], 13);
   		console.log("Carregou o leaflet");
   		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);
	}
  constructor(public navCtrl: NavController) {

  }

}
