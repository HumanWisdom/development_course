import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140011Page } from './s140011.page';

describe('S140011Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140011Page;
  let fixture: ComponentFixture<S140011Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140011Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140011Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
