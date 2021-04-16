import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Veiculo } from '../veiculo';
import { ActivatedRoute, Router } from '@angular/router';
import { VeiculoService } from 'src/app/core/veiculo.service';
import { AlertService } from 'src/app/core/alert.service';

@Component({
  selector: 'app-veiculo-edit',
  templateUrl: './veiculo-edit.component.html',
  styleUrls: ['./veiculo-edit.component.css']
})
export class VeiculoEditComponent implements OnInit {
  veiculoForm: FormGroup;
  id: number;
  isAddMode: boolean;

  constructor(private veiculoService: VeiculoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.isAddMode = !this.id;

    if(!this.isAddMode) {
      this.veiculoService.getVeiculo(this.id).subscribe(veiculo => {
        this.veiculoForm.patchValue(veiculo);
      });
    }

    this.veiculoForm = this.formBuilder.group({
      veiculo: ['', Validators.required],
      marca: ['', Validators.required],
      descricao: ['', Validators.required],
      ano: ['', Validators.required],
      vendido: ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.veiculoForm.valid) {
      const veiculo = this.veiculoForm.getRawValue() as Veiculo;

      if(!this.id) {
        this.veiculoService.addVeiculo(veiculo).subscribe(() => {
          this.alertService.showAlertCreateSuccess();
          this.router.navigate(['/']);
        },
        (error) => {
          this.alertService.showAlertFail();
          console.warn(error);
        });
      } else {
        this.veiculoService.updateVeiculo(veiculo, this.id).subscribe(() => {
          this.alertService.showAlertUpdateSuccess();
          this.router.navigate(['/']);
        },
        (error) => {
          this.alertService.showAlertFail();
          console.warn(error);
        });
      }
    }
  }

}
