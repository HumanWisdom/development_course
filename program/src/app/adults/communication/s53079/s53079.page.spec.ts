import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53079Page } from './s53079.page';

describe('S53079Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53079Page;
  let fixture: ComponentFixture<S53079Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53079Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53079Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
