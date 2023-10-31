import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45085Page } from './s45085.page';

describe('S45085Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45085Page;
  let fixture: ComponentFixture<S45085Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45085Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45085Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
