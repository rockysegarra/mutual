import { Component } from "@angular/core";
import { MembersService } from './services/members.service';

@Component({
    selector: "sample",
    templateUrl: "./sample.component.html",
    styleUrls: ["./sample.component.scss"],
})
export class SampleComponent {
    title = "angular-datatables";

    rows:any;

    constructor(private membersService: MembersService){

    }

    ngOnInit() {
        this.fetchMembers();

    }

    fetchMembers() {
        this.membersService.getMembers().subscribe(res =>{
            this.rows = res.data

        });
    }
}
