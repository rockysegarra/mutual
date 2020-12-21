import { Component, PipeTransform } from "@angular/core";
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Member } from './models/member';
import { MembersService } from './services/members.service';

@Component({
    selector: "sample",
    templateUrl: "./sample.component.html",
    styleUrls: ["./sample.component.scss"],
})
export class SampleComponent {
    title = "angular-datatables";

    rows:Member[];
    filter = new FormControl('');
    public rows$ = new BehaviorSubject(null);



    constructor(private membersService: MembersService){

    }

    ngOnInit() {
        this.fetchMembers();
        this.filter.valueChanges.subscribe(
            result => 
            {
                this.rows$.next(this.search(result));
            }
      );

    }

    fetchMembers() {
        this.membersService.getMembers().subscribe(res =>{
            this.rows = res.data;
            console.log(this.rows);
            this.rows$.next(this.rows);

        });
    }
    search(text: string, pipe?: PipeTransform): Member[] {
        return this.rows.filter(c => {
          const term = text.toLowerCase();
          return c.memberName.toLowerCase().includes(term)
              || c.memberNumber.toLowerCase().includes(term)
              || c.createdDt.toLowerCase().includes(term)
        });
      }
}
