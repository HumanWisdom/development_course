import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48027Page } from './s48027.page';

describe('S48027Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48027Page;
  let fixture: ComponentFixture<S48027Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48027Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48027Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
