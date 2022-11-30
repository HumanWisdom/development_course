import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45109Page } from './s45109.page';

describe('S45109Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45109Page;
  let fixture: ComponentFixture<S45109Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45109Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45109Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
