import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141054Page } from './s141054.page';

describe('S141054Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141054Page;
  let fixture: ComponentFixture<S141054Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141054Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141054Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
