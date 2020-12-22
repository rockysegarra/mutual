import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

import { FuseSharedModule } from "@fuse/shared.module";

import { SampleComponent } from "./members.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

const routes = [
    {
        path: "members",
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
