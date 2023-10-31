import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45095Page } from './s45095.page';

describe('S45095Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45095Page;
  let fixture: ComponentFixture<S45095Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45095Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45095Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
