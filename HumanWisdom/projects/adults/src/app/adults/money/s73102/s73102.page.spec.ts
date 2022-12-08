import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73102Page } from './s73102.page';

describe('S73102Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73102Page;
  let fixture: ComponentFixture<S73102Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73102Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73102Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
