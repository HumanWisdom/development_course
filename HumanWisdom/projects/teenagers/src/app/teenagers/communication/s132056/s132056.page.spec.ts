import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132056Page } from './s132056.page';

describe('S132056Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132056Page;
  let fixture: ComponentFixture<S132056Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132056Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132056Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
