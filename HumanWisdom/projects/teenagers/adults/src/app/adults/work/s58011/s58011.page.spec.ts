import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58011Page } from './s58011.page';

describe('S58011Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58011Page;
  let fixture: ComponentFixture<S58011Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58011Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58011Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
