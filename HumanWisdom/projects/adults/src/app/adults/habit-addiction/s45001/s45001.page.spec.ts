import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45001Page } from './s45001.page';

describe('S45001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45001Page;
  let fixture: ComponentFixture<S45001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
