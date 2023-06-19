import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S448p3Page } from './s448p3.page';

describe('S448p3Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S448p3Page;
  let fixture: ComponentFixture<S448p3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S448p3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S448p3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
