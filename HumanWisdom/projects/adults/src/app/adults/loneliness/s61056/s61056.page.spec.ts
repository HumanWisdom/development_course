import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61056Page } from './s61056.page';

describe('S61056Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61056Page;
  let fixture: ComponentFixture<S61056Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61056Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61056Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
