import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45022Page } from './s45022.page';

describe('S45022Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45022Page;
  let fixture: ComponentFixture<S45022Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45022Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45022Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
