import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63039Page } from './s63039.page';

describe('S63039Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63039Page;
  let fixture: ComponentFixture<S63039Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63039Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63039Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
