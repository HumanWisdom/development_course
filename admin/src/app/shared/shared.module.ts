import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [FooterComponent, TopNavComponent, SideNavComponent, ModalComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,TopNavComponent,SideNavComponent,ModalComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
