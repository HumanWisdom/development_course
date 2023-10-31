import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59069Page } from './s59069.page';

describe('S59069Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59069Page;
  let fixture: ComponentFixture<S59069Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59069Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59069Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
