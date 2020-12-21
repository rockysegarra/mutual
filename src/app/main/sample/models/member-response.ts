import { Member } from './member';

export interface MemberResponse {
    data:Member[];
    offset: Number;
    limit: Number;
    count: Number;
}
