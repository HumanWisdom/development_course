import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45115Page } from './s45115.page';

describe('S45115Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45115Page;
  let fixture: ComponentFixture<S45115Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45115Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45115Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
