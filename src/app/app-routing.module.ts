import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { RestauranteComponent } from './restaurante/restaurante.component'
import { DiversaoComponent } from './diversao/diversao.component'
import { OfertaComponent } from './oferta/oferta.component'
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';

const ROUTES: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full' },
	{ path: 'diversao', component: DiversaoComponent, pathMatch: 'full' },
	{ path: 'restaurante', component: RestauranteComponent, pathMatch: 'full' },
	{ path: 'oferta', component: HomeComponent, pathMatch: 'full' },
	{ path: 'oferta/:id', component: OfertaComponent,
		children: [
			{ path: '', component: ComoUsarComponent },
			{ path: 'como-usar', component: ComoUsarComponent },
			{ path: 'onde-fica', component: OndeFicaComponent }
		]
	}

];

@NgModule({
	imports: [RouterModule.forRoot(ROUTES)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
