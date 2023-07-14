import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53230Page } from './s53230.page';

describe('S53230Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53230Page;
  let fixture: ComponentFixture<S53230Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53230Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53230Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
