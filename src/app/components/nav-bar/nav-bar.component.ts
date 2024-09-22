import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToggleLangService } from 'src/app/services/toggle-lang.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  isEnglish = true; //ininal language is english

  constructor(private toggleLangService: ToggleLangService) {}

  changeLanguage() {
    this.isEnglish = !this.isEnglish; //reverse language flag to change it
    this.toggleLangService.switchLang(this.isEnglish ? 'en' : 'ar'); //filnd langualg and layout direction based of the flag
    document.body.dir = this.isEnglish ? 'ltr' : 'rtl';
  }
}
