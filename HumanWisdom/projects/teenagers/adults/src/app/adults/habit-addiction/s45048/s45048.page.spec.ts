import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45048Page } from './s45048.page';

describe('S45048Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45048Page;
  let fixture: ComponentFixture<S45048Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45048Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45048Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
