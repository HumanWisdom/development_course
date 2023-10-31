import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45146Page } from './s45146.page';

describe('S45146Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45146Page;
  let fixture: ComponentFixture<S45146Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45146Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45146Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
