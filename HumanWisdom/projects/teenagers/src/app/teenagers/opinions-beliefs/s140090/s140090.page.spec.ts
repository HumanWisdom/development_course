import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140090Page } from './s140090.page';

describe('S140090Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140090Page;
  let fixture: ComponentFixture<S140090Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140090Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140090Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
