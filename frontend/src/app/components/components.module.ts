/*Components*/
import { NgModule } from '@angular/core';
import { FooterComponent } from '../components/footer/footer.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
/*Routes*/
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/*Angular Material*/
import { AppMaterialModule } from '../app.material.module';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppMaterialModule,
    RouterModule

  ],
  declarations: [
    FooterComponent,
    NavBarComponent,
  ],
  exports: [
    FooterComponent,
    NavBarComponent,
  ],
})
export class ComponentsModule {}
