import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45024Page } from './s45024.page';

describe('S45024Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45024Page;
  let fixture: ComponentFixture<S45024Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45024Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45024Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
