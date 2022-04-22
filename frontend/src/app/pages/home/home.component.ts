import { Component, OnInit } from '@angular/core';
import { mediaModel } from 'src/app/data-structures/media/media.interface';
import { media } from 'src/app/data-structures/media/media.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  media:mediaModel[] = media
  constructor() { }

  ngOnInit(): void {
  }

}
