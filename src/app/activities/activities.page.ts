import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {

  activities: any = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    public alertController: AlertController) { }

  ngOnInit() {
    this.getActivities().subscribe(res=>{
      console.log("Res",res)
      this.activities = res;
    });
  }

  goToHome(){
    this.router.navigate(['/home'])
  }

  getActivities(){
    return this.http
    .get("assets/files/activities.json")
    .pipe(
      map((res:any) =>{
        return res.data;
      })
    )
  }

  async presentAlert1(){
    const alert = await this.alertController.create({
      header: "Error",
      message: "No extra info has been loaded",
      buttons: ["OK"]
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
  }
}