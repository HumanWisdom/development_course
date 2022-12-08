import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18065Page } from './s18065.page';

describe('S18065Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18065Page;
  let fixture: ComponentFixture<S18065Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18065Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18065Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
