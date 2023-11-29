import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132224Page } from './s132224.page';

describe('S132224Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132224Page;
  let fixture: ComponentFixture<S132224Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132224Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132224Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
