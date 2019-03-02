import {Injectable, PLATFORM_ID, APP_ID, Inject, ElementRef} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(APP_ID) private appId: string,
    private elRef: ElementRef,
    private _title: string,
    private _meta: string
  ) { }

  gtmEvent(category, action, label) {
    if (isPlatformBrowser(this.platformId)) {
      const dataLayer = (window['dataLayer'] = window['dataLayer'] || []);
      const gtmContent = {
        'event': 'virtualEvent',
        'category': category,
        'action': action,
        'label': label,
      };
      dataLayer.push(gtmContent);
    }
  }

  gtmVirtualPage(url, name) {
    if (isPlatformBrowser(this.platformId)) {
      if (url === '/') {
        name = 'Home';
      }

      this.changePageTitle(name);
      const dataLayer = (window['dataLayer'] = window['dataLayer'] || []);
      const gtmContent = {
        'event': 'virtualPage',
        'pageUrl': url,
        'pageName': name
      };
      dataLayer.push(gtmContent);
    }
  }

  changePageTitle(title) {
    let document: any = window.document;
    document.title = `Freemium - ${title}`;
  }

}
