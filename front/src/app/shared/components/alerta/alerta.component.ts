import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alerta } from '../../models/alerta';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss']
})
export class AlertaComponent implements OnInit {
  alerta = {
    btnSucesso: "OK",
    btnCancelar: "Cancelar",
    titulo: "Sucesso!",
    descricao: "Seu registro foi salvo com sucesso!",
    corBtnSucesso: "cor-verde",
    corBtnCancelar: "warn",

    possuirBtnFechar: false
  } as Alerta;

  constructor(public dialogRef: MatDialogRef<AlertaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alerta) { }

  ngOnInit(): void {
    if(this.data){
      this.alerta.titulo = this.data.titulo || this.alerta.titulo;
      this.alerta.btnSucesso = this.data.btnSucesso || this.alerta.btnSucesso;
      this.alerta.btnCancelar = this.data.btnCancelar || this.alerta.btnCancelar;
      this.alerta.descricao = this.data.descricao || this.alerta.descricao;
      this.alerta.corBtnSucesso = this.data.corBtnSucesso || this.alerta.corBtnSucesso;
      this.alerta.corBtnCancelar = this.data.corBtnCancelar || this.alerta.corBtnCancelar;
      this.alerta.possuirBtnFechar = this.data.possuirBtnFechar || this.alerta.possuirBtnFechar;
    }
  }
}