import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141011Page } from './s141011.page';

describe('S141011Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141011Page;
  let fixture: ComponentFixture<S141011Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141011Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141011Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
