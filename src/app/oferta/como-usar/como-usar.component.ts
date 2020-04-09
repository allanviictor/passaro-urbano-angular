import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertaService } from './../../service/ofertas.service';


@Component({
	selector: 'app-como-usar',
	templateUrl: './como-usar.component.html',
	styleUrls: ['./como-usar.component.css']
})
export class ComoUsarComponent implements OnInit {

	comoUsar: string = ''

	constructor(
		private route: ActivatedRoute,
		private ofertaService: OfertaService
	) { }

	ngOnInit(): void {

		this.ofertaService.getComoUsarPorId(this.route.parent.snapshot.params['id']).subscribe((response:string)=> {
			this.comoUsar = response['0'].descricao

		})

	}

}
