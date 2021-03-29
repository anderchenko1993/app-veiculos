import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VeiculoService } from 'src/app/core/veiculo.service';
import { Veiculo } from '../shared/veiculo';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/core/alert.service';

@Component({
  selector: 'app-veiculo-edit',
  templateUrl: './veiculo-edit.component.html',
  styleUrls: ['./veiculo-edit.component.css']
})
export class VeiculoEditComponent implements OnInit {
  veiculo: Veiculo;
  acao: string = 'Cadastrar';

  constructor(private veiculoService: VeiculoService, 
    private activatedRoute: ActivatedRoute,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.veiculo = new Veiculo();

    this.activatedRoute.params.subscribe(params => {
      if(params['id']) {
        this.veiculoService.getVeiculo(params['id']).subscribe(veiculo => {
          veiculo.vendido = veiculo.vendido ? 1 : 0;
          this.veiculo = veiculo;
        });

        this.acao = "Editar";
      }     
    });
  }

  onSubmit(form: NgForm) {
    if(form.valid) {
      if(this.veiculo._id) {
        this.veiculoService.updateVeiculo(this.veiculo, this.veiculo._id).subscribe(result => {
          console.log(result);
          this.alertService.showAlertUpdateSuccess();
        },
        (error) => {
          this.alertService.showAlertFail();
          console.warn(error);
        });
      }
      else {
        this.veiculoService.addVeiculo(this.veiculo).subscribe(result => {
          console.log(result);
          this.alertService.showAlertCreateSuccess();
        },
        (error) => {
          this.alertService.showAlertFail();
          console.warn(error);
        });
      }
    }
  }

}
