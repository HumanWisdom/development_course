import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48065Page } from './s48065.page';

describe('S48065Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48065Page;
  let fixture: ComponentFixture<S48065Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48065Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48065Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
