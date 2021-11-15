import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48017Page } from './s48017.page';

describe('S48017Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48017Page;
  let fixture: ComponentFixture<S48017Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48017Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48017Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
