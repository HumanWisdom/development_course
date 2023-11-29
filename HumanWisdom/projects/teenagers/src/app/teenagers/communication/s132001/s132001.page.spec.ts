import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132001Page } from './s132001.page';

describe('S132001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132001Page;
  let fixture: ComponentFixture<S132001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
