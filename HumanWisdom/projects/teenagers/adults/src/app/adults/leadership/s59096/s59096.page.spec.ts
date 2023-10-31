import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59096Page } from './s59096.page';

describe('S59096Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59096Page;
  let fixture: ComponentFixture<S59096Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59096Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59096Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
