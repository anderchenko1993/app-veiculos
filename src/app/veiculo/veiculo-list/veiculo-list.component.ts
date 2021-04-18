import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/alert.service';
import { VeiculoService } from 'src/app/core/veiculo.service';

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html',
  styleUrls: ['./veiculo-list.component.css']
})
export class VeiculoListComponent implements OnInit {

  columnsToDisplay: string[] = ['veiculo', 'marca', 'descricao', 'ano', 'vendido', 'acoes'];
  veiculos: Object[];

  constructor(private veiculoService: VeiculoService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.veiculoService.getVeiculos().subscribe(data => {
      this.veiculos = data;
    }, (error) => {
      this.alertService.showAlertFail();
      console.warn('Error', error);
    });
  }

  async delete(id: number) {
    let confirm = await this.alertService.showAlertDeleteDialog();

    if(confirm) {
      this.veiculoService.deleteVeiculo(id).subscribe(() => {
        this.alertService.showConfirmDelete();
        this.getAll();
      },
      (error) => {
        this.alertService.showAlertFail();
        console.warn(error);
      });
    }
  }



}
