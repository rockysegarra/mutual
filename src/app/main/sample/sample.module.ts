import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

import { FuseSharedModule } from "@fuse/shared.module";

import { SampleComponent } from "./sample.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

const routes = [
    {
        path: "sample",
        component: SampleComponent,
    },
];

@NgModule({
    declarations: [SampleComponent],
    imports: [
        RouterModule.forChild(routes),
        NgxDatatableModule,
        TranslateModule,
        FuseSharedModule,
    ],
    exports: [SampleComponent],
})
export class SampleModule {}
