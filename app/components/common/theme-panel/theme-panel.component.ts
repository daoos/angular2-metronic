import {Component, AfterViewInit} from 'angular2/core';

@Component({
    selector: 'theme-panel',
    templateUrl: 'app/components/common/theme-panel/theme-panel.template.html'
})
export class ThemePanelComponent {
    ngAfterViewInit() {
        Demo.init();
    }
}