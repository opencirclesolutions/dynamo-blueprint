import { NgModule } from '@angular/core';
import { OrganizationSearchComponent } from './organization-search/organization-search.component';
import { RouterModule, Routes } from '@angular/router';
import { BackendAvailableGuard } from './shared/guards/backend-available-guard';

const routes: Routes = [
  {
    path: '',
    title: 'Organizations',
    component: OrganizationSearchComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [BackendAvailableGuard]
})
export class AppRoutingModule {}
