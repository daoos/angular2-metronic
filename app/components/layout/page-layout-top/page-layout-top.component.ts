import {Component} from 'angular2/core';
import {PageBarComponent} from '../../common/page-bar/page-bar.component';
import {PageTitleComponent} from '../../common/page-title/page-title.component';
import {ThemePanelComponent} from '../../common/theme-panel/theme-panel.component';


@Component({
    selector: 'page-layout-top',
    templateUrl: 'app/components/layout/page-layout-top/page-layout-top.template.html',
    directives: [PageBarComponent, PageTitleComponent, ThemePanelComponent]
})
export class PageLayoutTopComponent {

}