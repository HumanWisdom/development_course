import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53037Page } from './s53037.page';

describe('S53037Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53037Page;
  let fixture: ComponentFixture<S53037Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53037Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53037Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
