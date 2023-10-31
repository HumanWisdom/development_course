import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57056Page } from './s57056.page';

describe('S57056Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57056Page;
  let fixture: ComponentFixture<S57056Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57056Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57056Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
