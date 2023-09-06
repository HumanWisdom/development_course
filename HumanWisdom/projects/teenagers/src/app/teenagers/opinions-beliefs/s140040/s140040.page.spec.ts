import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140040Page } from './s140040.page';

describe('S140040Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140040Page;
  let fixture: ComponentFixture<S140040Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140040Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140040Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
