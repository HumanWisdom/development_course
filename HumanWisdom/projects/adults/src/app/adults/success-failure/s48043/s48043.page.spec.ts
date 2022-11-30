import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48043Page } from './s48043.page';

describe('S48043Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48043Page;
  let fixture: ComponentFixture<S48043Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48043Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48043Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
