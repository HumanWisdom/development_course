import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45051Page } from './s45051.page';

describe('S45051Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45051Page;
  let fixture: ComponentFixture<S45051Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45051Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45051Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
