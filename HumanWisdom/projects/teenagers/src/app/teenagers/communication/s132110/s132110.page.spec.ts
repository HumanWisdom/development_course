import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132110Page } from './s132110.page';

describe('S132110Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132110Page;
  let fixture: ComponentFixture<S132110Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132110Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132110Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
