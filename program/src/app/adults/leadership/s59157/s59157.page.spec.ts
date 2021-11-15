import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59157Page } from './s59157.page';

describe('S59157Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59157Page;
  let fixture: ComponentFixture<S59157Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59157Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59157Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
