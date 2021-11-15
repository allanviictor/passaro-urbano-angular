import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { TopoComponent } from './topo/topo.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';

import { ButtonModule } from 'primeng/button';

import {TreeTableModule} from 'primeng/treetable';

import { DescricaoReduzida } from './utils/descricao-reduzida.pipe';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component'

@NgModule({
	declarations: [
		AppComponent,
		TopoComponent,
		HomeComponent,
		RodapeComponent,
		RestauranteComponent,
		DiversaoComponent,
		OfertaComponent,
		ComoUsarComponent,
		OndeFicaComponent,
		DescricaoReduzida,
		OrdemCompraComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ButtonModule,
		TreeTableModule,
		FormsModule
	],
	providers: [ ],
	bootstrap: [AppComponent]
})
export class AppModule { }
