import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55040Page } from './s55040.page';

describe('S55040Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55040Page;
  let fixture: ComponentFixture<S55040Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55040Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55040Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
