import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  endereco: string = '';
  numero: string = '';
  complemento: string = '';
  formaPagamento: string = '';

  enderecoEstadoPrimitivo: boolean = true;
  numeroEstadoPrimitivo: boolean = true;
  complementoEstadoPrimitivo: boolean = true;
  formaPagamentoEstadoPrimitivo: boolean = true;

  validaform: boolean = true;

  validaformEndereco: boolean = false;
  validaformNumero: boolean = false;
  validaformComplemento: boolean = false;
  validaformFormaPagamento: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  atualizaEndereco(value: string){
    this.endereco = value
    this.enderecoEstadoPrimitivo = false;
    if(this.endereco.length > 5){
      this.validaformEndereco = true;
    }else{
      this.validaformEndereco = false;
    }
    this.liberarbotao()
  }

  atualizaNumero(value: string){
    this.numero = value
    this.numeroEstadoPrimitivo = false;
    if(this.numero.length != 0){
      this.validaformNumero = true;
    }else{
      this.validaformNumero = false;
    }
    this.liberarbotao()
  }

  atualizaComplemento(value: string){
    this.complemento = value
    this.complementoEstadoPrimitivo = false;
    if(this.complemento.length  > 5){
      this.validaformComplemento = true;
    }else{
      this.validaformComplemento = false;
    }
    this.liberarbotao()
  }

  atuaizaFormaPagamento(value: string){
    this.formaPagamento = value
    this.formaPagamentoEstadoPrimitivo = false;
    if(this.formaPagamento.length != 0){
      this.validaformFormaPagamento = true
    }else {
      this.validaformFormaPagamento = false
    }
    this.liberarbotao()
  }

  liberarbotao(){
    if(this.validaformEndereco == true && this.validaformNumero == true && this.validaformComplemento == true && this.validaformFormaPagamento == true){
      this.validaform = false
    }
  }

}
