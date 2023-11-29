import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132159Page } from './s132159.page';

describe('S132159Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132159Page;
  let fixture: ComponentFixture<S132159Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132159Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132159Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
