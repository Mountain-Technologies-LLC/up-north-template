import { Component, input } from '@angular/core';
import { Schema } from '../../../../../../schema';
import { GlobalService } from '../../../../../services/global.service';

@Component({
  selector: 'app-publish-tab',
  templateUrl: './publish-tab.component.html',
})
export class PublishTabComponent {
  schema = input<Schema>();

  constructor (private readonly globalService: GlobalService) { }

  switchEditing() {
    this.globalService.editing.next(false);
  }

  exportJson() {
    let schema = JSON.stringify(this.schema());

    let file = new Blob([schema], {type: 'application/json'})
    let element = document.createElement('a');
    let url = URL.createObjectURL(file);
    element.setAttribute('href', url);
    element.setAttribute('download', "data.json");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click(); // simulate click
    document.body.removeChild(element);
  }
}
