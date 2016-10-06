import {Component, AfterViewInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {MainLayoutSidebarComponent} from './components/layout/main-layout-sidebar/main-layout-sidebar.component';
import {MainLayoutHeaderComponent} from  './components/layout/main-layout-header/main-layout-header.component';
import {MainLayoutQuickSidebarComponent} from  './components/layout/main-layout-quicksidebar/main-layout-quicksidebar.component';
import {MainLayoutFooterComponent} from  './components/layout/main-layout-footer/main-layout-footer.component';
import {PageEmptyComponent} from  './components/page/page-empty/page-empty.component';
import {ColorLibraryComponent} from  './components/ui-features/color-library/color-library.component';

@Component({
    selector: 'angular2-metronic-app',
    templateUrl: 'app/app.template.html',
    directives: [MainLayoutSidebarComponent, MainLayoutHeaderComponent, MainLayoutQuickSidebarComponent, MainLayoutFooterComponent, ROUTER_DIRECTIVES]

})

@RouteConfig([
    {path: '/', name: 'Home', component: PageEmptyComponent},
    {path: '/color-library', name: 'ColorLibrary', component: ColorLibraryComponent},
])

export class AppComponent implements AfterViewInit {
    ngAfterViewInit() {
        App.init();
        App.initAjax();
        Layout.init();
        QuickSidebar.init();
    }

}