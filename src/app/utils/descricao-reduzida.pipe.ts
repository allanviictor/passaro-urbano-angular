import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform {

    transform(text: string, cortar:number){
        if(text.length > cortar){
            return text.substr(0, cortar) + '...'
        }
        return text
    }
}