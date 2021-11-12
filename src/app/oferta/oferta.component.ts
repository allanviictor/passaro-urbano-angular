import { Oferta } from './../shared/oferta.model';
import { OfertaService } from './../service/ofertas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-oferta',
	templateUrl: './oferta.component.html',
	styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

	ofertas: Oferta[];

	constructor(
		private route: ActivatedRoute,
		private ofertaService: OfertaService
	) {}

	ngOnInit(): void {
		this.route.params.subscribe((params: any) => {
			
			this.ofertaService.getOfertaPorId(params.id).subscribe((response: Oferta[]) => {
				this.ofertas = response
				console.log(response)
			})
		})

	}

}
