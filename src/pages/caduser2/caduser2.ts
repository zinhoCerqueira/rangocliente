import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { Storage } from '@ionic/storage';

@IonicPage({
  name : 'caduser2'
})
@Component({
  selector: 'page-caduser2',
  templateUrl: 'caduser2.html',
})
export class Caduser2Page {

  registerForm : FormGroup;
  uid : string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public formbuilder: FormBuilder,
    public db: AngularFireDatabase,
    public storage: Storage) {

    

    this.registerForm = this.formbuilder.group({
      nomePessoa : [null, [Validators.required , Validators.minLength(3)]],
      sobrenome : [null, [Validators.required , Validators.minLength(3)]],
      cpf : [null, [Validators.required , Validators.minLength(3)]],
      uidUsuario : [null]
    })
  }

  ionViewDidLoad() {
    this.storage.get('user')
    .then((resolve) => {
      if(resolve.length > 0){
        this.uid = resolve;
      }
      else{
        console.log("essa porra é lenta pacarai")
      }
    })
  }

  enviarConta(){
    this.registerForm.patchValue({uidUsuario : this.uid})
    this.db.database.ref('/Cliente').push(this.registerForm.value)
    .then(() => {
      console.log('Salvou');
      this.navCtrl.setRoot('HomePage');
    })
  }

}
