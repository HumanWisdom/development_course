import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25040Page } from './s25040.page';

describe('S25040Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25040Page;
  let fixture: ComponentFixture<S25040Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25040Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25040Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
