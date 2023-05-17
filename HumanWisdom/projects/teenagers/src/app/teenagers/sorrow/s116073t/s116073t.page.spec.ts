import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116073tPage } from './s116073t.page';

describe('S116073tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116073tPage;
  let fixture: ComponentFixture<S116073tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116073tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116073tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
