import { Component } from '@angular/core';
import { ApiCepService } from '../../services/api-cep.service';
@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrl: './cep.component.css'
})
export class CepComponent {
  cep: string = '';
  address: any;

  constructor(private apiCepService: ApiCepService) { }

  fetchAddress() {
    this.apiCepService.getCepInfo(this.cep).subscribe(
      data => {
        this.address = data;
      }
      
    );
  }
}
