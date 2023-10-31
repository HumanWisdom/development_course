import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59073Page } from './s59073.page';

describe('S59073Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59073Page;
  let fixture: ComponentFixture<S59073Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59073Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59073Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
