import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { ProdutoPage } from '../produto/produto';
import { BuscaPage } from '../busca/busca';
import { VendedoresPage } from '../vendedores/vendedores';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  list;
  finalList;

  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public storage : Storage,
    public db: AngularFireDatabase) {
      
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.getListaProdutos();
  }

  getListaProdutos(){

  }

  openProduto(item){
    this.navCtrl.push(ProdutoPage, {data : item});
  }

  buscar(){
    this.navCtrl.push(BuscaPage);
  }

  vendedores(){
    this.navCtrl.push(VendedoresPage);
  }

  

}
