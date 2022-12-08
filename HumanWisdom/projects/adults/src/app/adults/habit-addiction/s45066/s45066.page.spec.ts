import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45066Page } from './s45066.page';

describe('S45066Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45066Page;
  let fixture: ComponentFixture<S45066Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45066Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45066Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
