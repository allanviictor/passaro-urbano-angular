import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { OfertaService } from '../service/ofertas.service'
import { Oferta } from '../shared/oferta.model'
import  Rxjs  from '../utils/rxjs-declarations'


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  subjectPesquisa: Subject<string> = new Subject<string>()
  ofertas: Observable<Oferta[]> 
  
  resultadoOfertas: Oferta[] = []

  constructor(
    private ofertaservice: OfertaService
  ) { }

  ngOnInit(): void {

    this.ofertas = this.subjectPesquisa.pipe(
      Rxjs.debounceTime(1000),
      Rxjs.distinctUntilChanged(),
      Rxjs.switchMap((termo:string)=> {
        console.log('requisicao para api')
        if(termo.trim() === ''){
          return of<Oferta[]>([])
        }else{
          return this.ofertaservice.getPesquisa(termo);
        }
      }),
      Rxjs.catchError((error:any) => {
        console.log(error)
        return of<Oferta[]>([])
      })
    )

    this.ofertas.subscribe((oferta:Oferta[])=> {
      console.log(oferta)
      this.resultadoOfertas = oferta
    })
    

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
    console.log('disparo do termo')
    this.subjectPesquisa.next(termo)
   
    /* this.subjectPesquisa.next(termo) */
    /* this.ofertas = this.ofertaservice.getPesquisa(termo)
    this.ofertas.subscribe(response => {
      console.log(response)
    },error=> {
      console.log('error: ',error.status)
    }) */
  }

  

  limparpesquisa(){
    this.subjectPesquisa.next('')
  }

}


