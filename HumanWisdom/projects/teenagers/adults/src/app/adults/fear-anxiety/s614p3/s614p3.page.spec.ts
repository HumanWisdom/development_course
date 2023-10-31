import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S614p3Page } from './s614p3.page';

describe('S614p3Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S614p3Page;
  let fixture: ComponentFixture<S614p3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S614p3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S614p3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
