import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132205Page } from './s132205.page';

describe('S132205Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132205Page;
  let fixture: ComponentFixture<S132205Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132205Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132205Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
