import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {Departamento} from '../../models/departamento';
import { ServiceDepartamentos } from '../../services/service.departamentos';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent implements OnInit {
  
  public ArrayDepartamentos!: Array<Departamento>;



  constructor(private _cdr:ChangeDetectorRef, private _service:ServiceDepartamentos) { }

  deleteDepartamento(id:number){
    this._service.deleteDepartamento(id).subscribe((response)=>{
      console.log(response);
      this._service.getDepartamentos().subscribe((response)=>{
        this.ArrayDepartamentos = response;
        this._cdr.detectChanges();
      })
    })
  }



  ngOnInit(): void {
    this._service.getDepartamentos().subscribe((response)=>{
      this.ArrayDepartamentos = response;
      this._cdr.detectChanges();
    })
  }

}
