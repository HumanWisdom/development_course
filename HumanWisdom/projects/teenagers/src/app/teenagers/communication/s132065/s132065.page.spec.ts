import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132065Page } from './s132065.page';

describe('S132065Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132065Page;
  let fixture: ComponentFixture<S132065Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132065Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132065Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
