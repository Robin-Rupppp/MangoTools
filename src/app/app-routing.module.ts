import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartpageComponent} from "./page/startpage/startpage.component";
import {PageNotFoundComponent} from "./page/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', component: StartpageComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
