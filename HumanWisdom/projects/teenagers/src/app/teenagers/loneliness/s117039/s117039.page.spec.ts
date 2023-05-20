import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117039Page } from './s117039.page';

describe('S117039Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S117039Page;
  let fixture: ComponentFixture<S117039Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117039Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117039Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
