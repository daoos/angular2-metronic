import {Component} from 'angular2/core';
import {PageLayoutTopComponent} from '../../layout/page-layout-top/page-layout-top.component';
import {PageBarComponent} from '../../common/page-bar/page-bar.component';
import {PageTitleComponent} from '../../common/page-title/page-title.component';
import {ThemePanelComponent} from '../../common/theme-panel/theme-panel.component';



@Component({
    selector: 'page-empty',
    templateUrl: 'app/components/page/page-empty/page-empty.template.html',
    directives: [PageLayoutTopComponent, PageBarComponent, PageTitleComponent, ThemePanelComponent]
})
export class PageEmptyComponent {
}