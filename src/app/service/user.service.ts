import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class UserService {
  public profilePhoto!: string;
  constructor(public http: HttpClient) {}

  public sendEmail(email:any) {
    return this.http.get(
      `http://localhost:3000/user/${email}`
    );
  }
}
