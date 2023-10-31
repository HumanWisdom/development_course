import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61031Page } from './s61031.page';

describe('S61031Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61031Page;
  let fixture: ComponentFixture<S61031Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61031Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61031Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
