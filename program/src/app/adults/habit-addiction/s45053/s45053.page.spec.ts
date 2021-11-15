import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45053Page } from './s45053.page';

describe('S45053Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45053Page;
  let fixture: ComponentFixture<S45053Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45053Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45053Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
