import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73065Page } from './s73065.page';

describe('S73065Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73065Page;
  let fixture: ComponentFixture<S73065Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73065Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73065Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
