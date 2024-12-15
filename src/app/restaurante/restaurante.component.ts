import { Component, OnInit } from "@angular/core";
import { OfertaService } from "./../service/ofertas.service";
import { Oferta } from "./../shared/oferta.model";

@Component({
	selector: "app-restaurante",
	templateUrl: "./restaurante.component.html",
	styleUrls: ["./restaurante.component.css"],
})
export class RestauranteComponent implements OnInit {
	public oferta!: Oferta;

	listaOfertasRestaurante: Oferta[] = [];

	constructor(private ofertaServices: OfertaService) {}

	ngOnInit(): void {
		this.ofertaServices
			.getOfertasPorCategoria("restaurante")
			.subscribe((response: Oferta[]) => {
				this.listaOfertasRestaurante = response;
				/* console.log(response) */
			});
	}
}
