import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25032Page } from './s25032.page';

describe('S25032Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25032Page;
  let fixture: ComponentFixture<S25032Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25032Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25032Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
