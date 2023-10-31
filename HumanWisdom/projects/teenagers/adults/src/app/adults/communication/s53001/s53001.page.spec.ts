import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53001Page } from './s53001.page';

describe('S53001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53001Page;
  let fixture: ComponentFixture<S53001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
