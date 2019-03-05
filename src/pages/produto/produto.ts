import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from '@angular/fire/database';

@IonicPage({
  name : 'produto'
})
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {

  x = this.navParams.get('data');
  registerForm : FormGroup;
  uid : string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formbuilder: FormBuilder,
              public storage : Storage,
              public db: AngularFireDatabase,) {    

              this.registerForm = this.formbuilder.group({
                nomeProduto : [null],
                precoProduto : [null],
                idVendedor : [null],
                uidUsuario : [null]
              })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutoPage');
    this.storage.get('user')
    .then((resolve) => {
      this.uid = resolve;
      console.log(resolve);
      console.log(this.uid);
    })  

    this.registerForm.patchValue({uidUsuario : this.uid, 
                                  nomeProduto: this.x.nomeProduto, 
                                  precoProduto: this.x.preco,
                                  idVendedor : this.x.uidVendedor})
  }

  compraProduto(){
    this.registerForm.patchValue({uidUsuario : this.uid});
    this.db.database.ref('/Pendentes').push(this.registerForm.value)
    .then(() => {
      console.log('Salvou');
      this.navCtrl.setRoot('HomePage');
    })
  }
}
