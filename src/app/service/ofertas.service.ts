import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Oferta } from "../shared/oferta.model";

@Injectable({
	providedIn: "root",
})
export class OfertaService {
	constructor(private http: HttpClient) {}

	public getOfertas(): Observable<Oferta[]> {
		return this.http.get<Oferta[]>(
			"http://localhost:3000/ofertas?destaque=true"
		);
	}

	public getOfertasPorCategoria(categoria: string): Observable<Oferta[]> {
		return this.http.get<Oferta[]>(
			`http://localhost:3000/ofertas?categoria=${categoria}`
		);
	}

	public getOfertaPorId(id: number): Observable<Oferta[]> {
		return this.http.get<Oferta[]>(
			`http://localhost:3000/ofertas?id=${id}`
		);
	}

	public getComoUsarPorId(id: number): Observable<string> {
		return this.http.get<string>(
			`http://localhost:3000/como-usar?id=${id}`
		);
	}

	public getOndeFicaPorId(id: number): Observable<string> {
		return this.http.get<string>(
			`http://localhost:3000/onde-fica?id=${id}`
		);
	}

	public getPesquisa(desc: string): Observable<Oferta[]> {
		return this.http
			.get<Oferta[]>(
				`http://localhost:3000/ofertas?descricao_oferta_like=${desc}`
			)
			.pipe(map((resposta: Oferta[]) => resposta));
	}
}
