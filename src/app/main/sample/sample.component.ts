import { Component } from "@angular/core";

@Component({
    selector: "sample",
    templateUrl: "./sample.component.html",
    styleUrls: ["./sample.component.scss"],
})
export class SampleComponent {
    title = "angular-datatables";

    rows = [];

    ngOnInit() {
        this.fetch((data) => {
            this.rows = data;
        });
    }

    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open(
            "GET",
            `http://swimlane.github.io/ngx-datatable/assets/data/company.json`
        );

        req.onload = () => {
            const data = JSON.parse(req.response);
            cb(data);
        };

        req.send();
    }
}
