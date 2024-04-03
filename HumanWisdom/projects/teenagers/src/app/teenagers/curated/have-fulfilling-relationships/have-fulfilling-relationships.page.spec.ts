import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HaveFulfillingRelationshipsPage } from './have-fulfilling-relationships.page';

describe('HaveFulfillingRelationshipsPage', () => {
  let component: HaveFulfillingRelationshipsPage;
  let fixture: ComponentFixture<HaveFulfillingRelationshipsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HaveFulfillingRelationshipsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HaveFulfillingRelationshipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
