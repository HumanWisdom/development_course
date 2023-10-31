import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60065Page } from './s60065.page';

describe('S60065Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60065Page;
  let fixture: ComponentFixture<S60065Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60065Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60065Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
