import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46009Page } from './s46009.page';

describe('S46009Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46009Page;
  let fixture: ComponentFixture<S46009Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46009Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46009Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
