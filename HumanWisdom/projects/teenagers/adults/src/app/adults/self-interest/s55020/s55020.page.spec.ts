import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55020Page } from './s55020.page';

describe('S55020Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55020Page;
  let fixture: ComponentFixture<S55020Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55020Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55020Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
