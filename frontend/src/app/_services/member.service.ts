import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from 'app/models/member.model';
import { Observable } from 'rxjs';

const MEM_API = 'http://localhost:8080/api/members/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Member[]> {
    return this.http.get<Member[]>(MEM_API);
  }

  create(data: any): Observable<any> {
    return this.http.post(MEM_API, data);
  }

  addpicture1(id: any, data: any): Observable<any> {
    return this.http.post(`${MEM_API}/addpicture1/${id}`, data);
  }

  addpicture2(id: any, data: any): Observable<any> {
    return this.http.post(`${MEM_API}/addpicture2/${id}`, data);
  }

  addpicture3(id: any, data: any): Observable<any> {
    return this.http.post(`${MEM_API}/addpicture3/${id}`, data);
  }

  addpicture4(id: any, data: any): Observable<any> {
    return this.http.post(`${MEM_API}/addpicture4/${id}`, data);
  }

  addpicture5(id: any, data: any): Observable<any> {
    return this.http.post(`${MEM_API}/addpicture5/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${MEM_API}/${id}`);
  }

}
