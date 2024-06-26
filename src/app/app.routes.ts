import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './views/pages/home-page/home-page.component';

export const routes: Routes =
[
	{ path: '', component: HomePageComponent}
];


@NgModule
({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
