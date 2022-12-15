import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25021Page } from './s25021.page';

describe('S25021Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25021Page;
  let fixture: ComponentFixture<S25021Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25021Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25021Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
