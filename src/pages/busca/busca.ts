import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { ProdutoPage } from '../produto/produto';

@IonicPage()
@Component({
  selector: 'page-busca',
  templateUrl: 'busca.html',
})
export class BuscaPage {

  list;
  finalList = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public db: AngularFireDatabase){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscaPage');
    this.getLista();
  }

  getLista(){
    let listaDB = this.db.database.ref('/Produto');
    listaDB.on('value', (snapshot) => {
      this.list = snapshot.val();
      if(this.list){
        this.finalList = Object.keys(this.list).map(i => this.list[i]);
      }
    })
    
  }

  openProduto(item : any){
    this.navCtrl.push(ProdutoPage, {data : item});
  }
}
