import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132216Page } from './s132216.page';

describe('S132216Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132216Page;
  let fixture: ComponentFixture<S132216Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132216Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132216Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
