import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesVendedorPage } from './detalhes-vendedor';

@NgModule({
  declarations: [
    DetalhesVendedorPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesVendedorPage),
  ],
})
export class DetalhesVendedorPageModule {}
