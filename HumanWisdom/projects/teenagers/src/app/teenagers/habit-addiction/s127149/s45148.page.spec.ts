import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45148Page } from './s45148.page';

describe('S45148Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45148Page;
  let fixture: ComponentFixture<S45148Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45148Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45148Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
