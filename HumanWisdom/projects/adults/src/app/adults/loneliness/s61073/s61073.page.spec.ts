import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61073Page } from './s61073.page';

describe('S61073Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61073Page;
  let fixture: ComponentFixture<S61073Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61073Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61073Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
