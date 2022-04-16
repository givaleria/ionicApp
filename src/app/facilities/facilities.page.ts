import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.page.html',
  styleUrls: ['./facilities.page.scss'],
})
export class FacilitiesPage implements OnInit {

  facilities: any = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    public toastController: ToastController,
    public alertController: AlertController) { }

  ngOnInit() {
    this.getFacilities().subscribe(res=>{
      console.log("Res",res)
      this.facilities = res;
    });
  }
  
  getFacilities(){
    return this.http
    .get("assets/files/facilities.json")
    .pipe(
      map((res:any) =>{
        return res.data;
      })
    )
  }

  async presentToast1(){
    const toast = await this.toastController.create({
      message: "Facility Selected",
      duration: 400, //milisegundos
      position: "bottom"
    });
    toast.present()
  }

  async presentAlert1(){
    const alert = await this.alertController.create({
      header: "Delete Picture",
      message: "Picture deleted successfully",
      buttons: ["OK"]
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2(){
    const alert = await this.alertController.create({
      header: "Delete picture",
      message: "Are you sure you want to delete this picture?",
      buttons: [
        {
          text: "No",
          handler: () => {
            console.log("Cancelled")
          }
        },
        {
          text: "Yes",
          handler: () => {
            console.log("Picture deleted")
          }
        }
      ]
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
  }
}