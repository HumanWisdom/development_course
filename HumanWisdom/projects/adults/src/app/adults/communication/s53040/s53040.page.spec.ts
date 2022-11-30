import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53040Page } from './s53040.page';

describe('S53040Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53040Page;
  let fixture: ComponentFixture<S53040Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53040Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53040Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
