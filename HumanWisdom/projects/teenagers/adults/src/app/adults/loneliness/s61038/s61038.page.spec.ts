import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61038Page } from './s61038.page';

describe('S61038Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61038Page;
  let fixture: ComponentFixture<S61038Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61038Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61038Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
