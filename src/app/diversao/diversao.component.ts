import { Component, OnInit } from "@angular/core";
import { OfertaService } from "./../service/ofertas.service";
import { Oferta } from "./../shared/oferta.model";

@Component({
	selector: "app-diversao",
	templateUrl: "./diversao.component.html",
	styleUrls: ["./diversao.component.css"],
})
export class DiversaoComponent implements OnInit {
	/* oferta: Oferta = new Oferta()
	 */
	listaOfetasDiversao: Oferta[] = [];

	constructor(private ofertaService: OfertaService) {}

	ngOnInit(): void {
		this.ofertaService
			.getOfertasPorCategoria("diversao")
			.subscribe((response: Oferta[]) => {
				this.listaOfetasDiversao = response;
			});
	}
}
