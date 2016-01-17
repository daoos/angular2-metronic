import {Component} from 'angular2/core';



@Component({
    selector: 'breadcrumb-item',
    template: `
    <ul>
        <li *ng-for="#breadcrumb of breadcrumbList">
            <a (click)="gotoLink(breadcrumb)>{{breadcrumb.name}}</a>
            <i class="fa fa-circle"></i>
        </li>
    </ul>
    <ng-content></ng-content>
  `,
})
export class BreadcrumbItemComponent {
}