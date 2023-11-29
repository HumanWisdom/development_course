import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132079Page } from './s132079.page';

describe('S132079Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132079Page;
  let fixture: ComponentFixture<S132079Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132079Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132079Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
