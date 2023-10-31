import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61067Page } from './s61067.page';

describe('S61067Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61067Page;
  let fixture: ComponentFixture<S61067Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61067Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61067Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
