import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../service/ofertas.service'
import { Oferta } from '../shared/oferta.model'
import { HttpClient } from '@angular/common/http';

import {TreeNode} from 'primeng/api';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	oferta: Oferta = new Oferta()

	listaOfertasHome: Oferta[] = []

	no: TreeNode[] = []; 

	constructor(
		private ofertaService: OfertaService,
		private http: HttpClient
	) { }

	ngOnInit(): void {
		this.ofertaService.getOfertas().subscribe((data: Oferta[])=>{
			this.listaOfertasHome = data
		})

		setTimeout(() => {

			console.log(this.listaOfertasHome[0].imagens['0'].url)
		}, 3000);

		this.getDadosTable()


	}

	getDadosTable(){
		this.http.get(`http://localhost:3000/data`).subscribe((data: any) => {
			this.no = data
			return console.log('objeto data ', data)
		})
	}

}
