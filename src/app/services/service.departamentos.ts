import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";

@Injectable()
export class ServiceDepartamentos {

    url = environment.apiDepartamentos
    constructor(private _http:HttpClient){

    }

    getDepartamentos(): Observable<any>{
        return this._http.get(this.url + "api/departamentos");
    }
}