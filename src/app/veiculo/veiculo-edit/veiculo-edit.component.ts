import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VeiculoService } from 'src/app/core/veiculo.service';

@Component({
  selector: 'app-veiculo-edit',
  templateUrl: './veiculo-edit.component.html',
  styleUrls: ['./veiculo-edit.component.css']
})
export class VeiculoEditComponent implements OnInit {

  constructor(private veiculoService: VeiculoService) { }

  @ViewChild('form') courseForm: NgForm;


  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

  }

}
