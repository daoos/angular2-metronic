import {Component} from 'angular2/core';
import {PageLayoutTopComponent} from '../../layout/page-layout-top/page-layout-top.component';

@Component({
    selector: 'color-library',
    templateUrl: 'app/components/ui-features/color-library/color-library.template.html',
    directives: [PageLayoutTopComponent]
})
export class ColorLibraryComponent {

}