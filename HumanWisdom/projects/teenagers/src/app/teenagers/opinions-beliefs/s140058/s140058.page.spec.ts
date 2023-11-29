import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140058Page } from './s140058.page';

describe('S140058Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140058Page;
  let fixture: ComponentFixture<S140058Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140058Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140058Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
