"use strict";
// Si scriva in TS una classe AnyMatrix che rappresenta una matrice rettangolare r x c 
// (rappresentata come array di array) che contiene elementi omogenei, di qualsiasi tipo (stringhe, numeri, oggetti, ecc.). 
// La classe deve offrire:
// - Costruttore (che costruisce una matrice avente almeno dimensione 1x1), 
// che prende anche un valore v con cui inizializzare il contenuto della matrice. 
// - Metodo setAll(dati: T[][]): boolean che, preso un array di array di dimensione pxq, 
// usa i valori contenuti nel parametro dati come valori da assegnare a questa matrice. 
// Se le dimensioni di dati e di questa matrice non coincidono, il metodo restituisce false; 
// altrimenti, true.
// - Metodo transpose() che restituisce una nuova AnyMatrix, trasposta di questa matrice. 
class AnyMatrix {
    constructor(row = 1, column = 1, v) {
        this.row = row;
        this.column = column;
        this.v = v;
        this.matrix = [];
        for (let i = 0; i < row; i++) {
            this.matrix[i] = [];
            for (let j = 0; j < column; j++) {
                this.matrix[i][j] = v;
            }
            ;
        }
        ;
    }
    ;
    setAll(dati) {
        if (this.row == dati.length && this.column == dati[dati.length - 1].length) {
            for (let i = 0; i < this.row; i++) {
                for (let j = 0; j < this.row; j++) {
                    this.matrix[i][j] = dati[i][j];
                }
                ;
            }
            ;
            return true;
        }
        ;
        return false;
    }
    ;
    transpose() {
        let nuovaMatrix = new AnyMatrix(this.row, this.column, this.v);
        for (let i = 0; i < this.row; i++)
            for (let j = 0; j < this.column; j++)
                nuovaMatrix.matrix[j][i] = this.matrix[i][j];
        return nuovaMatrix.matrix;
    }
}
let matrice = new AnyMatrix(4, 3, "valore");
console.log(matrice.setAll([["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["10", "11", "12"]]));
console.log(matrice);
console.log(matrice.transpose());
