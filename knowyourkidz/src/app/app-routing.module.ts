import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoomIntegrationComponent } from './zoom-integration/zoom-integration.component';
import { ZoomComponent } from './zoom/zoom.component';

const routes: Routes = [
  { path: 'zoom', component: ZoomIntegrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
