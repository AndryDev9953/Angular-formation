import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  snapped!: string;
  ngOnInit() {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis tout petit !';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl ="https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg";
    this.snapped = "Oh snap!";
  }

  onSnap() {
      if(this.snapped === "Oh snap!"){
           this.snaps++;
           this.snapped = "Ooops, un snap";
      }else {
            this.snaps--;
            this.snapped= "Oh snap!"
      }
  }
}
