import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59054Page } from './s59054.page';

describe('S59054Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59054Page;
  let fixture: ComponentFixture<S59054Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59054Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59054Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
