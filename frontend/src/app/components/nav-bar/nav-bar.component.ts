import { navigationModel } from './../../data-structures/navigation/navigation.model';
import { Component, OnInit } from '@angular/core';
import { navigation } from 'src/app/data-structures/navigation/navigation.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  navigation:navigationModel[] = navigation;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigate(link:string){
this.router.navigate([link])
  }

}
