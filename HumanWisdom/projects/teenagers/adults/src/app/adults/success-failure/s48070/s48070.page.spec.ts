import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48070Page } from './s48070.page';

describe('S48070Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48070Page;
  let fixture: ComponentFixture<S48070Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48070Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48070Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
