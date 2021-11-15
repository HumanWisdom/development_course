import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61039Page } from './s61039.page';

describe('S61039Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61039Page;
  let fixture: ComponentFixture<S61039Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61039Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61039Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
