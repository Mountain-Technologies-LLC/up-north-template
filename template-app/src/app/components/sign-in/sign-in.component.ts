import { AfterViewInit, Component, Inject } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [],
  templateUrl: './sign-in.component.html',
})
export class SignInComponent implements AfterViewInit {
  constructor (@Inject(DOCUMENT) private document: Document) { }

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      //var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))
      const sbBaseColor = this.document!.body.computedStyleMap().get('--btn-color')?.toString() ?? "#49306b";
      console.log("sbBaseColor", sbBaseColor);

      // https://www.geeksforgeeks.org/how-to-include-a-javascript-file-in-angular-and-call-a-function-from-that-script/
      var widget = new SimplybookWidget(
        {
          "container_id": "simply-book",
          "widget_type": "iframe",
          "url": "https:\/\/brightguyelectric.simplybook.me",
          "theme": "default",
          "theme_settings": {
            // "timeline_hide_unavailable":"1",
            // "hide_past_days":"0",
            // "timeline_show_end_time":"0",
            // "timeline_modern_display":"as_slots",
            // "sb_base_color":"#49306b",
            // "display_item_mode":"block",
            // "body_bg_color":"#fffaf5",
            // "sb_review_image":"",
            // "dark_font_color":"#474747",
            // "light_font_color":"#ffffff",
            // "btn_color_1":"#c98e5a",
            // "sb_company_label_color":"#372515",
            // "hide_img_mode":"0",
            // "sb_busy":"#c7b3b3",
            // "sb_available":"#d6ebff"
          },
          "timeline": "modern",
          "datepicker": "top_calendar",
          "is_rtl": false,
          "app_config": {
            "clear_session":0,
            "allow_switch_to_ada":0,
            "predefined": {
              "client": {
                "name": "",
                "email": "",
                "phone": ""
              }
            }
          }
        }
      );
    }
  }
}
