import { Injectable } from '@angular/core';

@Injectable()
export class Table {
    dados: any[] = [];
    linha: any;
    coluna: any;

    public init(Obj: any, linha = 0, coluna = 0) {
        if (Obj != null) {
            for (let i = 0; i < Obj.length; i++) {
                this.dados[i] = Obj[i].toString().split(';');
            }
        }

        this.linha = linha || 0;
        this.coluna = coluna;
    }

    public validarMovimento(movimento) {
        switch (movimento) {
            case 0: // abaixo
                return this.linha < this.dados.length - 1;
            case 1: // esquerda
                return this.coluna > 0;
            case 2: // acima
                return this.linha > 0;
            case 3: // direita
                return this.coluna < this.dados[0].length - 1;
            default:
                return false;
        }
    }

    public mover(movimento) {
        if (!this.validarMovimento(movimento)) {
            return false;
        }
        switch (movimento) {
            case 0: // abaixo
                this.linha++;
                break;
            case 1: // esquerda
                this.coluna--;
                break;
            case 2: // acima
                this.linha--;
                break;
            case 3: // direita
                this.coluna++;
                break;
        }
        return true;
    }
    public getLinha() {
        return this.linha;
    }

    public setColuna(coluna) {
        this.coluna = coluna;
    }

    public getColuna() {
        return this.coluna;
    }
    public setLinha(linha) {
        this.linha = linha;
    }

    public setDados(dados) {
        this.dados = dados;
    }
    public getDados() {
        return this.dados;
    }

}
