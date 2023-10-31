import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73008Page } from './s73008.page';

describe('S73008Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73008Page;
  let fixture: ComponentFixture<S73008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
