import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60079Page } from './s60079.page';

describe('S60079Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60079Page;
  let fixture: ComponentFixture<S60079Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60079Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60079Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
