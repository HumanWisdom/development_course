import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141027Page } from './s141027.page';

describe('S141027Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141027Page;
  let fixture: ComponentFixture<S141027Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141027Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141027Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
