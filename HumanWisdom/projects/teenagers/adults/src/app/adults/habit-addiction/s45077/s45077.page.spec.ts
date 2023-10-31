import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45077Page } from './s45077.page';

describe('S45077Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45077Page;
  let fixture: ComponentFixture<S45077Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45077Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45077Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
