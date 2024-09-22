import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleLangService {

  defaultLang = 'en';

  constructor(private translate: TranslateService) {
    this.translate.use(this.defaultLang);
   }

   switchLang(newLang:string){
    this.translate.use(newLang)
   }
}
