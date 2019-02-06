import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AngularFireModule} from '@angular/fire';
import { environments } from '../environments/environments'
import { LoginPage } from '../pages/login/login';
import { AngularFireAuth } from '@angular/fire/auth';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { ProdutoPage } from '../pages/produto/produto';
import { BuscaPage } from '../pages/busca/busca';
import { VendedoresPage } from '../pages/vendedores/vendedores';
import { DetalhesVendedorPage } from '../pages/detalhes-vendedor/detalhes-vendedor';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ProdutoPage,
    BuscaPage,
    VendedoresPage,
    DetalhesVendedorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environments.firebase),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ProdutoPage,
    BuscaPage,
    VendedoresPage,
    DetalhesVendedorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
