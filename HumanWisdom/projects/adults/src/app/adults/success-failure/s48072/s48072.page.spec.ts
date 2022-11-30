import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48072Page } from './s48072.page';

describe('S48072Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48072Page;
  let fixture: ComponentFixture<S48072Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48072Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48072Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
