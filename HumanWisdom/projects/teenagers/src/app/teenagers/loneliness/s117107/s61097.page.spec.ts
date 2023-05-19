import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61097Page } from './s61097.page';

describe('S61097Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61097Page;
  let fixture: ComponentFixture<S61097Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61097Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61097Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
