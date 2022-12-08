import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45132Page } from './s45132.page';

describe('S45132Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45132Page;
  let fixture: ComponentFixture<S45132Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45132Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45132Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
