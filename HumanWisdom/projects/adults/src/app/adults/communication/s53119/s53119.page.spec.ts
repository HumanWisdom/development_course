import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53119Page } from './s53119.page';

describe('S53119Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53119Page;
  let fixture: ComponentFixture<S53119Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53119Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53119Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
