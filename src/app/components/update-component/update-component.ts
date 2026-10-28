import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update-component',
  standalone: false,
  styleUrl: './update-component.css',
  templateUrl: './update-component.html',
})
export class UpdateComponent implements OnInit {
  public departamento!: Departamento;

  @ViewChild("cajaid") cajaId!: ElementRef;
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidad!: ElementRef;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceDepartamentos,
    private _activeRoute: ActivatedRoute,
    private _router: Router) {
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let id = parseInt(params['id']);

      this._service.findDepartamento(id).subscribe((response: Departamento) => {
        this.departamento = response;
        this._cdr.detectChanges();
      })
    })
  }

  updateDepartamento() {
    let id = parseInt(this.cajaId.nativeElement.value);
    let nombre = this.cajaNombre.nativeElement.value;
    let localidad = this.cajaLocalidad.nativeElement.value;

    let departamento = new Departamento(id, nombre, localidad);

    this._service.updateDepartamento(departamento).subscribe(
      response => {
        console.log(response);
        this._router.navigate(['/details/' + departamento.numero + '/' + departamento.nombre + '/' + departamento.localidad]);
        this._cdr.detectChanges();
      }
    );
  }

}
