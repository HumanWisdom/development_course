import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59079Page } from './s59079.page';

describe('S59079Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59079Page;
  let fixture: ComponentFixture<S59079Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59079Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59079Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
