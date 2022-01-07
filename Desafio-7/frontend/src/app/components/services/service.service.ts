import { FormGroup } from '@angular/forms';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

    baseUrl = "http://localhost:3000/contact-us";
    tela = innerWidth;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg:string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
        })
  }

  mensagem(formulario: FormGroup): Observable<FormGroup> {
    return this.http.post<FormGroup>(this.baseUrl, formulario)
  }
}
