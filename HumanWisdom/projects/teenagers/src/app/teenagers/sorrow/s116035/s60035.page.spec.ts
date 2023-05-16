import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60035Page } from './s60035.page';

describe('S60035Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60035Page;
  let fixture: ComponentFixture<S60035Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60035Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60035Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
