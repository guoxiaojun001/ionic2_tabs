import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {NativeService} from "../../../providers/NativeService";
import {UpdateLogPage} from "../update-log/update-log";
import {FeedBackPage} from "../feed-back/feed-back";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  versionNo: string = '0.0.1';

  constructor(private navCtrl: NavController,
              private nativeService: NativeService) {
    if (this.nativeService.isMobile()) {
      this.nativeService.getVersionNumber().then(value => {
        this.versionNo = value;
      });
    }
  }

  checkNewVersion() {

  }

  updateLog() {
    this.navCtrl.push(UpdateLogPage);
  }

  features() {
    this.nativeService.showToast('正在完善...');
  }

  feedBack() {
    this.navCtrl.push(FeedBackPage);
  }

}


