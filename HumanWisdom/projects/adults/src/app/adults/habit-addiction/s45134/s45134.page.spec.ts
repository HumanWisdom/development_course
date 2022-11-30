import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45134Page } from './s45134.page';

describe('S45134Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45134Page;
  let fixture: ComponentFixture<S45134Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45134Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45134Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
