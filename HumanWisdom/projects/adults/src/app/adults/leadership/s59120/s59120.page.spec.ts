import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59120Page } from './s59120.page';

describe('S59120Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59120Page;
  let fixture: ComponentFixture<S59120Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59120Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59120Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
