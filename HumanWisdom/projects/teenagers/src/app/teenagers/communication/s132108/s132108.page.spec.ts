import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132108Page } from './s132108.page';

describe('S132108Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132108Page;
  let fixture: ComponentFixture<S132108Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132108Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132108Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
