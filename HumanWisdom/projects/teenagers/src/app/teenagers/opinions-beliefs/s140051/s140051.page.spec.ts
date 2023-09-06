import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140051Page } from './s140051.page';

describe('S140051Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140051Page;
  let fixture: ComponentFixture<S140051Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140051Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140051Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
