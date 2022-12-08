import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73039Page } from './s73039.page';

describe('S73039Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73039Page;
  let fixture: ComponentFixture<S73039Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73039Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73039Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
