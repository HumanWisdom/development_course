import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61040Page } from './s61040.page';

describe('S61040Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61040Page;
  let fixture: ComponentFixture<S61040Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61040Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61040Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
