import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61051Page } from './s61051.page';

describe('S61051Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61051Page;
  let fixture: ComponentFixture<S61051Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61051Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61051Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
