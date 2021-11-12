import { Oferta } from '../shared/oferta.model'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})

export class OfertaService {

	constructor(
		private http: HttpClient
	){}

	getOfertas(){
		return this.http.get('http://localhost:3000/ofertas?destaque=true')
	}

	getOfertasPorCategoria(categoria: string){
		return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
	}

	getOfertaPorId(id: number){
		return this.http.get(`http://localhost:3000/ofertas?id=${id}`)
	}

	getComoUsarPorId(id: number){
		return this.http.get(`http://localhost:3000/como-usar?id=${id}`)
	}

	getOndeFicaPorId(id: number){
		return this.http.get(`http://localhost:3000/onde-fica?id=${id}`)
	}

	getPesquisa(desc: string): Observable<Oferta[]>{
		return this.http.get(`http://localhost:3000/ofertas?descricao_oferta_like=${desc}`)
		.pipe(
			map((resposta: Oferta[]) => resposta)
		)
	}

}
