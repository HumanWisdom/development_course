import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45090Page } from './s45090.page';

describe('S45090Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45090Page;
  let fixture: ComponentFixture<S45090Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45090Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45090Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
