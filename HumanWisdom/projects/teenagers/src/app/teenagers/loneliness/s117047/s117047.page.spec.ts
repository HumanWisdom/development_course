import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117047Page } from './s117047.page';

describe('S117047Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S117047Page;
  let fixture: ComponentFixture<S117047Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117047Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117047Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
