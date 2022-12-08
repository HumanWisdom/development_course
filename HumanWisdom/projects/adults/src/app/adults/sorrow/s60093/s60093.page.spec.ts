import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60093Page } from './s60093.page';

describe('S60093Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60093Page;
  let fixture: ComponentFixture<S60093Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60093Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60093Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
