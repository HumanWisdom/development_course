import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60009Page } from './s60009.page';

describe('S60009Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60009Page;
  let fixture: ComponentFixture<S60009Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60009Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60009Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
