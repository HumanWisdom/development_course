import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116053Page } from './s116053.page';

describe('S116053Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116053Page;
  let fixture: ComponentFixture<S116053Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116053Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116053Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
