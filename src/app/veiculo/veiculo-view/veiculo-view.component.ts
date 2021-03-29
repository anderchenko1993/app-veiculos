import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VeiculoService } from 'src/app/core/veiculo.service';
import { Veiculo } from '../shared/veiculo';

@Component({
  selector: 'app-veiculo-view',
  templateUrl: './veiculo-view.component.html',
  styleUrls: ['./veiculo-view.component.css']
})
export class VeiculoViewComponent implements OnInit {
  veiculo: Veiculo;

  constructor(private veiculoService: VeiculoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params['id']) {
        this.veiculoService.getVeiculo(params['id']).subscribe(veiculo => {
          this.veiculo = veiculo;
        });
      }     
    });
  }

}
