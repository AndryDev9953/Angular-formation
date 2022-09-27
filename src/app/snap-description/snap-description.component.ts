import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snap-description',
  templateUrl: './snap-description.component.html',
  styleUrls: ['./snap-description.component.scss']
})
export class SnapDescriptionComponent implements OnInit {
    lien!: string;
    
  ngOnInit(){
    this.lien = "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg";
  }

} 
