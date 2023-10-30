import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { AspirantesComponent } from "../app/aspirantes/aspirantes.component";
import { AppComponent } from "./app.component";

const routes:Routes=[
    {path: '',redirectTo: '/home', pathMatch:'full'},
    {path: 'home', component: AppComponent},
    {path: 'AspirantesComponent', component: AspirantesComponent }
    

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule{}
