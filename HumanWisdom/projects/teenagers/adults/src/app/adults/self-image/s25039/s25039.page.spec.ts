import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25039Page } from './s25039.page';

describe('S25039Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25039Page;
  let fixture: ComponentFixture<S25039Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25039Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25039Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
