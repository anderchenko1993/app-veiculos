import { Component, OnInit } from '@angular/core';
import { VeiculoService } from 'src/app/core/veiculo.service';

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html',
  styleUrls: ['./veiculo-list.component.css']
})
export class VeiculoListComponent implements OnInit {

  columnsToDisplay: string[] = ['veiculo', 'marca', 'descricao', 'ano', 'vendido', 'acoes'];
  veiculos: Object[];

  constructor(private veiculoService: VeiculoService) { }

  ngOnInit(): void {
    this.getAll();
  }

  async getAll() {
    await this.veiculoService.list().subscribe(data => {
      this.veiculos = data;
    });
  }

  async delete(id: number) {
    await this.veiculoService.delete(id).subscribe(() => {
      this.getAll();
    },
    (error) => {
      alert("Erro ao executar ação, por favor, tente novamente.");
      console.warn(error);
    });
   
  }



}
