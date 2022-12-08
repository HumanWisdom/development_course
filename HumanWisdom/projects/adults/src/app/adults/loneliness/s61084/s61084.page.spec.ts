import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61084Page } from './s61084.page';

describe('S61084Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61084Page;
  let fixture: ComponentFixture<S61084Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61084Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61084Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
