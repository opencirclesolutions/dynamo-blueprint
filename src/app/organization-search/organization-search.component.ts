import { Component } from '@angular/core';
import { GenericSearchLayoutComponent } from '@open-circle-solutions/dynamo-angular';

@Component({
  selector: 'app-organization-search',
  templateUrl: './organization-search.component.html',
  styleUrls: ['./organization-search.component.scss'],
  standalone: true,
  imports: [ GenericSearchLayoutComponent ],
})
export class OrganizationSearchComponent {

}
