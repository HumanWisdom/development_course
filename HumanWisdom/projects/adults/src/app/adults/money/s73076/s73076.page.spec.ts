import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73076Page } from './s73076.page';

describe('S73076Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73076Page;
  let fixture: ComponentFixture<S73076Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73076Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73076Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
