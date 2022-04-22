/*Components*/
import { NgModule } from '@angular/core';
import { ContactComponent } from '../pages/contact/contact.component';
import { HomeComponent } from '../pages/home/home.component';
/*Routes*/
import { RouterModule } from '@angular/router';
import { AppLayoutRoutes } from './layout.routing';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
/*Angular Material*/
import { AppMaterialModule } from '../app.material.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(AppLayoutRoutes),
    AppMaterialModule
  ],
  declarations: [
    ContactComponent,
    HomeComponent,
  ],
  exports: [
    ContactComponent,
    HomeComponent,
  ],
})
export class LayoutModule {}
