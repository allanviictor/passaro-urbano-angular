import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { Observable, Subject, of } from "rxjs";
import { OfertaService } from "../service/ofertas.service";
import { Oferta } from "../shared/oferta.model";
import Rxjs from "../utils/rxjs-declarations";

@Component({
	selector: "app-topo",
	templateUrl: "./topo.component.html",
	styleUrls: ["./topo.component.css"],
})
export class TopoComponent implements OnInit {
	public subjectPesquisa: Subject<string> = new Subject<string>();
	public ofertas!: Observable<Oferta[]>;

	resultadoOfertas: Oferta[] = [];

	@ViewChild("termoBusca") public inputBuscar!: ElementRef;

	constructor(private ofertaservice: OfertaService) {}

	ngOnInit(): void {
		this.ofertas = this.subjectPesquisa.pipe(
			Rxjs.debounceTime(1000),
			Rxjs.distinctUntilChanged(),
			Rxjs.switchMap((termo: string) => {
				console.log("requisicao para api");
				if (termo.trim() === "") {
					return of<Oferta[]>([]);
				} else {
					return this.ofertaservice.getPesquisa(termo);
				}
			}),
			Rxjs.catchError((error: any) => {
				console.log(error);
				return of<Oferta[]>([]);
			})
		);

		this.ofertas.subscribe((oferta: Oferta[]) => {
			console.log(oferta);
			this.resultadoOfertas = oferta;
		});
	}

	pesquisa(termo: any) {
		this.subjectPesquisa.next(termo);
	}

	limparpesquisa() {
		this.subjectPesquisa.next("");
		this.inputBuscar.nativeElement.value = "";
	}
}
