import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18039Page } from './s18039.page';

describe('S18039Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18039Page;
  let fixture: ComponentFixture<S18039Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18039Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18039Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
