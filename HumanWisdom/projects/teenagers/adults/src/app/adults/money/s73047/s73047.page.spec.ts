import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73047Page } from './s73047.page';

describe('S73047Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73047Page;
  let fixture: ComponentFixture<S73047Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73047Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73047Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
