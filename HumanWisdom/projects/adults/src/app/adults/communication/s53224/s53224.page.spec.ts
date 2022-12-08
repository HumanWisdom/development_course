import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53224Page } from './s53224.page';

describe('S53224Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53224Page;
  let fixture: ComponentFixture<S53224Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53224Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53224Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
