import { Component, input } from '@angular/core';
import { Schema } from '../../../../../../schema';

@Component({
  selector: 'app-publish-tab',
  standalone: true,
  imports: [],
  templateUrl: './publish-tab.component.html',
})
export class PublishTabComponent {
  schema = input<Schema>();

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
