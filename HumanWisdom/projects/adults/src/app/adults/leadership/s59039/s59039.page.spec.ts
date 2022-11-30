import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59039Page } from './s59039.page';

describe('S59039Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59039Page;
  let fixture: ComponentFixture<S59039Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59039Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59039Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
