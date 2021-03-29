import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  showAlertCreateSuccess() {
    Swal.fire({
      icon: 'success',
      title: 'Cadastrado com sucesso!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  showAlertUpdateSuccess() {
    Swal.fire({
      icon: 'success',
      title: 'Atualizado com sucesso!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  showAlertFail() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Erro ao efetuar a ação, por favor, tente novamente.',
    })
  }

  showConfirmDelete() {
    Swal.fire({
      icon: 'success',
      title: 'Excluído com sucesso!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  async showAlertDeleteDialog() {
    let confirm;

    await Swal.fire({
      title: 'Você deseja excluir este registro?',
      showCancelButton: true,
      confirmButtonText: 'Excluir',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        confirm = true;
      } else {
        confirm = false;
      }
    })

    return confirm;
  }
}