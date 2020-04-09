import { Component, OnInit } from '@angular/core';
import { OfertaService } from './../../service/ofertas.service';
import { ActivatedRoute } from '@angular/router';


@Component({
	selector: 'app-onde-fica',
	templateUrl: './onde-fica.component.html',
	styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

	ondeFica: string = ''

	constructor(
		private route: ActivatedRoute,
		private ofertaService: OfertaService
	) { }

	ngOnInit(): void {
		this.ofertaService.getOndeFicaPorId(this.route.parent.snapshot.params['id']).subscribe((response:string)=> {
			this.ondeFica = response['0'].descricao

		})

	}

}
