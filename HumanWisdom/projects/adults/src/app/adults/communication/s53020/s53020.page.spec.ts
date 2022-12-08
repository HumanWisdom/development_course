import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53020Page } from './s53020.page';

describe('S53020Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53020Page;
  let fixture: ComponentFixture<S53020Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53020Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53020Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
