import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48089Page } from './s48089.page';

describe('S48089Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48089Page;
  let fixture: ComponentFixture<S48089Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48089Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48089Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
