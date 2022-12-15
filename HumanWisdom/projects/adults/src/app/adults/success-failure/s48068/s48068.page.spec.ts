import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48068Page } from './s48068.page';

describe('S48068Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48068Page;
  let fixture: ComponentFixture<S48068Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48068Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48068Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
