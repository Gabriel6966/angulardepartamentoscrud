import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";
import { Departamento } from "../models/departamento";

@Injectable()
export class ServiceDepartamentos {

    url = environment.apiDepartamentos
    constructor(private _http:HttpClient){

    }

    getDepartamentos(): Observable<any>{
        return this._http.get(this.url + "api/departamentos");
    }


    createDepartamento(departamento: Departamento): Observable<any>{
        //convertimos el ojeto recibido a json
        let json = JSON.stringify(departamento);
        //creamos un objeto para el type
        let header  = new HttpHeaders();
        //incluimos la key de content-type
        header = header.set('Content-Type', 'application/json');
        console.log(json);


        console.log(header);


        return this._http.post(this.url + "api/Departamentos",json, {headers: header});
    }


}