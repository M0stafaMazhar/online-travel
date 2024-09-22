import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleLangService {
  defaultLang = 'en';

  constructor(private translate: TranslateService) {
    this.translate.use(this.defaultLang); //set initial language to english
  }

  switchLang(newLang: string) {
    this.translate.use(newLang); //toggle the language
  }
}
