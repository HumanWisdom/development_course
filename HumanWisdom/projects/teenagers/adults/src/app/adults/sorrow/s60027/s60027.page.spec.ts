import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60027Page } from './s60027.page';

describe('S60027Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60027Page;
  let fixture: ComponentFixture<S60027Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60027Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60027Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
