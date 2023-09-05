import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141027tPage } from './s141027t.page';

describe('S141027tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141027tPage;
  let fixture: ComponentFixture<S141027tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141027tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141027tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
