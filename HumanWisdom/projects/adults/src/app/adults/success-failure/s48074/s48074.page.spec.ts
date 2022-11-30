import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48074Page } from './s48074.page';

describe('S48074Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48074Page;
  let fixture: ComponentFixture<S48074Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48074Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48074Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
