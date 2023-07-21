import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132125Page } from './s132125.page';

describe('S132125Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132125Page;
  let fixture: ComponentFixture<S132125Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132125Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132125Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
