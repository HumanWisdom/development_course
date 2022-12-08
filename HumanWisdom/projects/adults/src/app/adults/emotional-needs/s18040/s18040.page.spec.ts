import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18040Page } from './s18040.page';

describe('S18040Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18040Page;
  let fixture: ComponentFixture<S18040Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18040Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18040Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
