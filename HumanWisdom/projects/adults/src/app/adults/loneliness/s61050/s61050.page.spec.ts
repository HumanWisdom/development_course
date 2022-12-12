import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61050Page } from './s61050.page';

describe('S61050Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61050Page;
  let fixture: ComponentFixture<S61050Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61050Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61050Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
