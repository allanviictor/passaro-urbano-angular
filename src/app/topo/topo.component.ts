import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { OfertaService } from '../service/ofertas.service'
import { Oferta } from '../shared/oferta.model'
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  subjectPesquisa: Subject<string> = new Subject<string>()
  ofertas: Observable<Oferta[]> 
  
  /* ofertas2: Oferta[] = [] */

  constructor(
    private ofertaservice: OfertaService
  ) { }

  ngOnInit(): void {

    

    /* this.ofertas = this.subjectPesquisa
    .pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((termo: string) => {
        if(termo.trim() === ''){
            return of<Oferta[]>([])
        }
        console.log(termo)
        return this.ofertaservice.getPesquisa(termo)
      }),
      catchError((err: any) => {
        return of<Oferta[]>([])
      })
    ) */

    /* this.ofertas.subscribe((pesquisa: Oferta[]) => {
      console.log(pesquisa)
      this.ofertas2 = pesquisa
    }) */
    
  }

  pesquisa(termo:any){
    
   
    /* this.subjectPesquisa.next(termo) */
    this.ofertas = this.ofertaservice.getPesquisa(termo)
    this.ofertas.subscribe(response => {
      console.log(response)
    })
  }

  

  limparpesquisa(){
    this.subjectPesquisa.next('')
  }

}


