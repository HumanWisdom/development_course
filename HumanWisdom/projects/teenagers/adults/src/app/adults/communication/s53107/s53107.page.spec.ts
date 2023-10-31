import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53107Page } from './s53107.page';

describe('S53107Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53107Page;
  let fixture: ComponentFixture<S53107Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53107Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53107Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
