import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59169Page } from './s59169.page';

describe('S59169Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59169Page;
  let fixture: ComponentFixture<S59169Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59169Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59169Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
