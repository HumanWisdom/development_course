import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60020Page } from './s60020.page';

describe('S60020Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60020Page;
  let fixture: ComponentFixture<S60020Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60020Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60020Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
