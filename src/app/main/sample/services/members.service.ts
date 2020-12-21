import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List } from 'lodash';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MemberResponse } from '../models/member-response';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  membersUrl = "https://mdbackenapp.azurewebsites.net/members?offset=0&limit=10&summary=true&orderby=memberName&order=asc&q=memberStatus==Active"

  constructor(private httpClient: HttpClient) { }

  getMembers(): Observable<MemberResponse>{
    return this.httpClient.get<MemberResponse>(this.membersUrl);
  }

}
