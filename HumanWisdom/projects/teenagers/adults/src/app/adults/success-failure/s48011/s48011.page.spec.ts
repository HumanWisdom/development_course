import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48011Page } from './s48011.page';

describe('S48011Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48011Page;
  let fixture: ComponentFixture<S48011Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48011Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48011Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
