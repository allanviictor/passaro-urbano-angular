import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OfertaService } from "./../../service/ofertas.service";

@Component({
	selector: "app-onde-fica",
	templateUrl: "./onde-fica.component.html",
	styleUrls: ["./onde-fica.component.css"],
})
export class OndeFicaComponent implements OnInit {
	ondeFica: string = "";

	constructor(
		private route: ActivatedRoute,
		private ofertaService: OfertaService
	) {}

	ngOnInit(): void {
		/* this.route.parent?.params.subscribe((params: any) => {
			this.ofertaService
				.getOndeFicaPorId(params.id)
				.subscribe((response: string) => {
					this.ondeFica = response["0"].descricao;
					console.log("reponse", response);
				});
		}); */
	}
}
