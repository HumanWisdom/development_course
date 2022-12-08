import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59144Page } from './s59144.page';

describe('S59144Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59144Page;
  let fixture: ComponentFixture<S59144Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59144Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59144Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
