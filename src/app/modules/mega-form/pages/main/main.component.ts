import { Component } from '@angular/core';
import {BreadcrumbInterface} from "../../../../shared/modules/breadcrumbs/breadcrumb.interface";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  breadcrumbs: BreadcrumbInterface[] = [
    { title: 'media', url: [] },
    { title: 'news', url: [] },
  ]

}
