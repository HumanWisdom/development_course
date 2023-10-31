import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25038Page } from './s25038.page';

describe('S25038Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25038Page;
  let fixture: ComponentFixture<S25038Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25038Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25038Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
