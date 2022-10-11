import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public GETBuku: any;
  constructor(    
    private http: HttpClient,
    private toast: ToastController
  ) {}
  
  ionViewWillEnter() {
    this._GetData();
  }

  _GetData() {
    let data: Observable<any>;
    data = this.http.get('http://localhost/uts-perpus-ci/index.php/api/GetDataBuku');
    data.subscribe(result => {
      this.GETBuku= result;
      console.log(result);
    });
  }
}
