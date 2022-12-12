import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48106Page } from './s48106.page';

describe('S48106Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48106Page;
  let fixture: ComponentFixture<S48106Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48106Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48106Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
