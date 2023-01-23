import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes=[
    {
        path:'', //path vacío, así que cuando estemos en la principal
        component: PorPaisComponent,
        pathMatch: 'full' //por ser el principal, para que no de Match cuando haya /algo
    },
    {
        path:'region', //cuando tengamos blablabla/region
        component: PorRegionComponent
    },
    {
        path:'capital',
        component: PorCapitalComponent
    },
    {
        path:'pais/:id',  //en este caso la url es dinamica (depende de un id)
        component: VerPaisComponent
    },
    {
        path:'**',  //cualquier otro caso, lo redirige a la pag principal
        redirectTo: ''
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)

    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{}