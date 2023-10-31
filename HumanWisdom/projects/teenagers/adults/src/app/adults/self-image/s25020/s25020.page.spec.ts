import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25020Page } from './s25020.page';

describe('S25020Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25020Page;
  let fixture: ComponentFixture<S25020Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25020Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25020Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
