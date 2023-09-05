import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140085tPage } from './s140085t.page';

describe('S140085tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140085tPage;
  let fixture: ComponentFixture<S140085tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140085tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140085tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
