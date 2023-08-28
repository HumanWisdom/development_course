import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140052Page } from './s140052.page';

describe('S140052Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140052Page;
  let fixture: ComponentFixture<S140052Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140052Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140052Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
