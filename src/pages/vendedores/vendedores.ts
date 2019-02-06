import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { DetalhesVendedorPage } from '../detalhes-vendedor/detalhes-vendedor';


@IonicPage({
  name : 'VendedoresPage'
})
@Component({
  selector: 'page-vendedores',
  templateUrl: 'vendedores.html',
})
export class VendedoresPage {

  list;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public db: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VendedoresPage');
    this.getVendedores();
  }

  getVendedores(){
      let listaDB = this.db.database.ref('/Vendedor');
      listaDB.on('value', (snapshot) => {
        const itens = snapshot.val();
        if(itens){
          this.list = Object.keys(itens).map(i => itens[i])
          //testando as keys
          console.log(itens);
        }        
      })
  }

  verDetalhes(item){
    this.navCtrl.push(DetalhesVendedorPage, {data : item});
  }

}
