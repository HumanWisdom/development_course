import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25002Page } from './s25002.page';

describe('S25002Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25002Page;
  let fixture: ComponentFixture<S25002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
