import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140039Page } from './s140039.page';

describe('S140039Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140039Page;
  let fixture: ComponentFixture<S140039Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140039Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140039Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
