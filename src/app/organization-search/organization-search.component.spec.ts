import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationSearchComponent } from './organization-search.component';

describe('OrganizationSearchComponent', () => {
  let component: OrganizationSearchComponent;
  let fixture: ComponentFixture<OrganizationSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationSearchComponent]
    });
    fixture = TestBed.createComponent(OrganizationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
