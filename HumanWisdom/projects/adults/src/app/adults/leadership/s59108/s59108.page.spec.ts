import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59108Page } from './s59108.page';

describe('S59108Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59108Page;
  let fixture: ComponentFixture<S59108Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59108Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59108Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
