import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../service/ofertas.service'
import { Oferta } from '../shared/oferta.model'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	oferta: Oferta = new Oferta()

	listaOfertasHome: Oferta[] = []

	constructor(
		private ofertaService: OfertaService
	) { }

	ngOnInit(): void {
		this.ofertaService.getOfertas().subscribe((data: Oferta[])=>{
			this.listaOfertasHome = data
		})

		setTimeout(() => {

			console.log(this.listaOfertasHome[0].imagens['0'].url)
		}, 3000);


	}

}
