import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45123Page } from './s45123.page';

describe('S45123Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45123Page;
  let fixture: ComponentFixture<S45123Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45123Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45123Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
