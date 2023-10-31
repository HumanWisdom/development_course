import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57011Page } from './s57011.page';

describe('S57011Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57011Page;
  let fixture: ComponentFixture<S57011Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57011Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57011Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
