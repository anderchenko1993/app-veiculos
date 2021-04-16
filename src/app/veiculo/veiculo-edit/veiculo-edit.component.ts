import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Veiculo } from '../veiculo';
import { ActivatedRoute } from '@angular/router';
import { VeiculoService } from 'src/app/core/veiculo.service';
import { AlertService } from 'src/app/core/alert.service';

@Component({
  selector: 'app-veiculo-edit',
  templateUrl: './veiculo-edit.component.html',
  styleUrls: ['./veiculo-edit.component.css']
})
export class VeiculoEditComponent implements OnInit {
  veiculoForm: FormGroup;
  veiculo: Veiculo;
  acao: string = 'Cadastrar';

  constructor(private veiculoService: VeiculoService,
    private activatedRoute: ActivatedRoute,
    private alertService: AlertService,
    private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.veiculoForm = this.formBuilder.group({
      veiculo: ['', Validators.required],
      marca: ['', Validators.required],
      descricao: ['', Validators.required],
      ano: ['', Validators.required],
      vendido: ['', Validators.required]
    });


    // this.veiculo = new Veiculo();

    // this.activatedRoute.params.subscribe(params => {
    //   if(params['id']) {
    //     this.veiculoService.getVeiculo(params['id']).subscribe(veiculo => {
    //       veiculo.vendido = veiculo.vendido ? 1 : 0;
    //       this.veiculo = veiculo;
    //     });

    //     this.acao = "Editar";
    //   }
    // });
  }

  onSubmit() {
    if(this.veiculoForm.valid) {
      console.log(this.veiculoForm.getRawValue());
    }

    // if(form.valid) {
    //   if(this.veiculo._id) {
    //     this.veiculoService.updateVeiculo(this.veiculo, this.veiculo._id).subscribe(() => {
    //       this.alertService.showAlertUpdateSuccess();
    //     },
    //     (error) => {
    //       this.alertService.showAlertFail();
    //       console.warn(error);
    //     });
    //   }
    //   else {
    //     this.veiculoService.addVeiculo(this.veiculo).subscribe(() => {
    //       this.alertService.showAlertCreateSuccess();
    //       form.resetForm();
    //     },
    //     (error) => {
    //       this.alertService.showAlertFail();
    //       console.warn(error);
    //     });
    //   }
    // }
  }

}
