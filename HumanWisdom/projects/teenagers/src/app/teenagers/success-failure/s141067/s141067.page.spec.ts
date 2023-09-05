import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141067Page } from './s141067.page';

describe('S141067Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141067Page;
  let fixture: ComponentFixture<S141067Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141067Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141067Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
