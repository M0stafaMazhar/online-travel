import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToggleLangService } from 'src/app/services/toggle-lang.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  isEnglish = true;

  constructor(private toggleLangService: ToggleLangService ){

  }


   changeLanguage(){
    this.isEnglish = !this.isEnglish
    this.toggleLangService.switchLang(this.isEnglish ? "en" : "ar");
    document.body.dir = this.isEnglish ? "ltr" : "rtl";
   }
}
