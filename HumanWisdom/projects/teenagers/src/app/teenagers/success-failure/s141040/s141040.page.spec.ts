import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141040Page } from './s141040.page';

describe('S141040Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141040Page;
  let fixture: ComponentFixture<S141040Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141040Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141040Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
