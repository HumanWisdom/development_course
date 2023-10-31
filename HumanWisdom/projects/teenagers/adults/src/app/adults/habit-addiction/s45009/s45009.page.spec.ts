import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45009Page } from './s45009.page';

describe('S45009Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45009Page;
  let fixture: ComponentFixture<S45009Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45009Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45009Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
