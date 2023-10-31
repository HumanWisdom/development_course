import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61032Page } from './s61032.page';

describe('S61032Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61032Page;
  let fixture: ComponentFixture<S61032Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61032Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61032Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
