import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61063Page } from './s61063.page';

describe('S61063Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61063Page;
  let fixture: ComponentFixture<S61063Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61063Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61063Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
