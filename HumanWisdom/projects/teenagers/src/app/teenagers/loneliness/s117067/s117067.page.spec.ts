import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117067Page } from './s117067.page';

describe('S117067Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S117067Page;
  let fixture: ComponentFixture<S117067Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117067Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117067Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
