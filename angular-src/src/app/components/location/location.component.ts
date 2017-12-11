import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  img:any;
  constructor() { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position=>{
      let latitude  = position.coords.latitude;
      let longitude = position.coords.longitude;
      alert('Latitude is ' + latitude + '°. Longitude is ' + longitude + '°');
      this.img = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
  });
  }

}
