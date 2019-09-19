import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormulariosComponent } from './pages/formularios/formularios.component';
import { ItensComponent } from './pages/itens/itens.component';


const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "forms", component: FormulariosComponent },
    { path: "itens", component: ItensComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
